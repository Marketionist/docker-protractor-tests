'use strict';
/* global by, element */

// #############################################################################
// INTEGRATION TEST PAGE OBJECT

var leadPage = {
    site: 'https://core.futuresimple.com/users/login',
    username: '2k415a+bq5c6xuixnj8@sharklasers.com',
    password: 'Q1234567',

    usernameInput: element(by.id('user_email')),
    passwordInput: element(by.id('user_password')),
    loginButton: element(by.css('.controls > .btn-primary')),
    userMenu: element(by.css('*[data-original-title="Settings"] > .base-icon-arrow-down')),
    loadingFinishedBar: element(by.css('#feedback-progress.hide > .bar[style="width: 100%;"]')),
    leadsIcon: element(by.id('nav-leads')),
    leadButton: element(by.id('leads-new')),
    leadFirstNameInput: element(by.id('lead-first-name')),
    leadLastNameInput: element(by.id('lead-last-name')),
    saveButton: element(by.css('.edit-buttons > .save')),
    leadStatus: element(by.css('.lead-status')),
    userDropdownOpen: element(by.css('#user-dd.dropdown.open')),
    settingsIcon: element(by.css('.topbar-settings-dropdown .icon-cog')),
    leadsLink: element(by.css('.settings-menu .leads')),
    leadStatusesLink: element(by.css('a[data-toggle="lead-status"]')),
    editNewButton: element(by.xpath('//*[ancestor::*[@class="control-group item"' +
        ' and descendant::*[text()="New"]] and contains(@class, "edit")]')),
    newNameInput: element(by.css('#name[data-current-value="New"]')),
    updatedLeadStatus: 'Updated',
    saveNewLeadButton: element(by.xpath('//*[ancestor::*[@class="item form"' +
        ' and descendant::*[@data-current-value="New"]] and contains(@class, "save")]')),
    leadNameLink: element(by.css('.lead-name')),

    editUpdatedButton: element(by.xpath('//*[ancestor::*[@class="control-group item"' +
        ' and descendant::*[text()="Updated"]] and contains(@class, "edit")]')),
    updatedNameInput: element(by.css('#name[data-current-value="Updated"]')),
    newLeadStatus: 'New',
    saveUpdatedLeadButton: element(by.xpath('//*[ancestor::*[@class="item form"' +
        ' and descendant::*[@data-current-value="Updated"]] and contains(@class, "save")]'))
};

module.exports = leadPage;
