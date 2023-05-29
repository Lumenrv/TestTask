class MainPage {
    btnRunProject() {
        return cy.get('button');
    }
    btnAddCertificate() {
        return cy.get('[class="btn btn-primary"]');
    }

    uploadCertificate() {
        cy.get('div dropbox').selectFile('cert.cer', {
            action: 'drag-drop'
          })
    }

    validateAllTableFields(arr) {
        cy.get('[class="ng-binding"]').each(($el, index, $list) => {
            expect($el.text()).to.equal(arr[index]);
        })
    }
}

export default MainPage;