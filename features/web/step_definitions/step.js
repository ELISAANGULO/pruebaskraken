const { Given, When, Then } = require('@cucumber/cucumber');
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('.email.ember-text-field.gh-input.ember-view');
    return await element.setValue(email);
});
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('.password.ember-text-field.gh-input.ember-view');
    return await element.setValue(password);
});
When('I click next', async function() {
    let element = await this.driver.$('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    return await element.click();
})

When('I click pages', async function() {
    let element = await this.driver.$('#ember33');
    return await element.click();
})

When('I click New page', async function() {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
    return await element.click();
})

When('I enter page {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(writepage);
});

When('I enter contenido pagina {kraken-string}', async function (writecontenido) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.setValue(writecontenido);
});

When('I click Salir page', async function() {
    let element = await this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button');
    return await element.click();
})

When('I click Posts', async function() {
    let element = await this.driver.$('.ember-view.gh-secondary-action.gh-nav-new-post');
    return await element.click();
})


When('I enter new post {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(writepage);
});

When('I enter a subtitle {kraken-string}', async function (writepage) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.setValue(writepage);
});

When('I click Post back', async function() {
    let element = await this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button');
    return await element.click();
})

When('I click on mobile content', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-group-selected.gh-post-preview-mode');
    return await element.click();
})

When('I click on preview', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-editor.gh-editor-preview-trigger');
    return await element.click();
})
