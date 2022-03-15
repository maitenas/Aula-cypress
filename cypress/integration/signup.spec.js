import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'

describe('Signup', () => {

//        beforeEach(function () {
//          cy.fixture('deliver').then((d) => {
//                this.deliver = d
//            })
//    })



    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)

    })

    it('Incorret document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorret email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'papito.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
})



