import SignUpController from '../../src/presentation/SignUp'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const httpRequest = {
      email: 'any_email@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }

    const httpResponse = SignUpController.handler(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
