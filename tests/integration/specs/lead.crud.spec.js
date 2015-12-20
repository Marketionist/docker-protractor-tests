'use strict';
/* global describe, it, expect, browser */

// #############################################################################
// INTEGRATION TEST
var leadPage = require('../pages/lead.crud.page.js');
var cmsProtractorHelper = require('cms-protractor-helper');

describe('Base CRM integration tests: ', function () {

    // create random lead name
    var leadName = 'Test lead ' + cmsProtractorHelper.randomDigits(4);

    it('log in to the site with valid username and password', function () {
        // log in to the site
        cmsProtractorHelper.login({
            credentials: {
                site: leadPage.site,
                username: leadPage.username,
                password: leadPage.password
            },
            elements: {
                usernameInput: leadPage.usernameInput,
                passwordInput: leadPage.passwordInput,
                loginButton: leadPage.loginButton,
                userMenu: leadPage.userMenu
            }
        });
        // wait for page to get fully loaded
        cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
    });

    it('create a new lead, validate its status', function () {
        // click on "Leads" icon to get to leads page
        leadPage.leadsIcon.click();

        // wait for page to get fully loaded
        cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
        // wait for new lead button to appear
        cmsProtractorHelper.waitFor(leadPage.leadButton);
        // click to create new lead
        leadPage.leadButton.click();

        // wait for page to get fully loaded
        cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
        // wait for First Name input to appear
        cmsProtractorHelper.waitFor(leadPage.leadFirstNameInput);
        // fill in random First Name
        leadPage.leadFirstNameInput.sendKeys(leadName);

        return leadPage.leadLastNameInput.sendKeys('Surname').then(function () {
            leadPage.saveButton.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            // wait for lead status to appear
            cmsProtractorHelper.waitFor(leadPage.leadStatus);

            // validate "New" lead status
            return leadPage.leadStatus.getText().then(function (text) {
                expect(text).toEqual(leadPage.newLeadStatus);
            });
        });
    });

    it('change the name of the "New" status to "Updated", validate it changed inside lead', function () {
        leadPage.userMenu.click();

        // wait for dropdpwn to get visible
        cmsProtractorHelper.waitFor(leadPage.userDropdownOpen);
        leadPage.settingsIcon.click();

        // wait for page to get fully loaded
        cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
        cmsProtractorHelper.waitFor(leadPage.leadsLink);
        leadPage.leadsLink.click();

        // wait for page to get fully loaded
        cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
        cmsProtractorHelper.waitFor(leadPage.leadStatusesLink);
        leadPage.leadStatusesLink.click();

        // wait for "New" edit button to appear
        cmsProtractorHelper.waitFor(leadPage.editNewButton);
        leadPage.editNewButton.click();

        // wait for name input to appear
        cmsProtractorHelper.waitFor(leadPage.newNameInput);
        leadPage.newNameInput.clear();

        return leadPage.newNameInput.sendKeys(leadPage.updatedLeadStatus).then(function () {
            leadPage.saveNewLeadButton.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            cmsProtractorHelper.waitFor(leadPage.leadsIcon);
            // click on "Leads" icon to get to leads page
            leadPage.leadsIcon.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            cmsProtractorHelper.waitFor(leadPage.leadNameLink);
            // click on lead name to get to lead details page
            leadPage.leadNameLink.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            // wait for lead status to appear
            cmsProtractorHelper.waitFor(leadPage.leadStatus);

            // validate "Updated" lead status
            return leadPage.leadStatus.getText().then(function (text) {
                expect(text).toEqual(leadPage.updatedLeadStatus);
            });
        });
    });

    it('change back the name of the status to "New", validate it changed inside lead', function () {
        browser.get('https://app.futuresimple.com/settings/leads/lead-status');

        // wait for page to get fully loaded
        cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
        // wait for "Updated" edit button to appear
        cmsProtractorHelper.waitFor(leadPage.editUpdatedButton);
        leadPage.editUpdatedButton.click();

        // wait for name input to appear
        cmsProtractorHelper.waitFor(leadPage.updatedNameInput);
        leadPage.updatedNameInput.clear();

        return leadPage.updatedNameInput.sendKeys(leadPage.newLeadStatus).then(function () {
            leadPage.saveUpdatedLeadButton.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            cmsProtractorHelper.waitFor(leadPage.leadsIcon);
            // click on "Leads" icon to get to leads page
            leadPage.leadsIcon.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            cmsProtractorHelper.waitFor(leadPage.leadNameLink);
            // click on lead name to get to lead details page
            leadPage.leadNameLink.click();

            // wait for page to get fully loaded
            cmsProtractorHelper.waitFor(leadPage.loadingFinishedBar);
            // wait for lead status to appear
            cmsProtractorHelper.waitFor(leadPage.leadStatus);
            // validate "New" lead status
            return leadPage.leadStatus.getText().then(function (text) {
                expect(text).toEqual(leadPage.newLeadStatus);
            });
        });
    });

});
