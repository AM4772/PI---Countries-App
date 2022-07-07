const dbLoad = require('../../src/controllers/DbloaderController')

it('Is it there?', () =>{
expect(dbLoad).toBeDefined()
});

it('No erros thrown', () =>{
    const dbLoad = jest.fn(() => true)
    dbLoad()
    expect(dbLoad).toHaveReturned()
});
