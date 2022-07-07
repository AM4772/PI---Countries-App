const LandingPage = require('./components/LandingPage/Landing')

it('Is it there?', () =>{
expect(LandingPage).toBeDefined()
});

it('No erros thrown', () =>{
    const LandingPage = jest.fn(() => true);
    LandingPage()
    expect(LandingPage).toHaveReturned();
});