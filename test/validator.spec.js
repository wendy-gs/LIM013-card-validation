// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it.skip('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
      const valor=validator.isValid("408395201526");
      const  resultado =true;
      expect(valor).to.equal(resultado);
    });

    it.skip('debería retornar true para "79927398713"', () => {
      // escribe aquí tu test
      const valor=validator.isValid("79927398713");
      const  resultado =true;
      expect(valor).to.equal(resultado);
    });

    it.skip('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
      const valor=validator.isValid("1234567890");
      const  resultado =false;
      expect(valor).to.equal(resultado);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it.skip('Debería retornar "############5616" para "4556364607935616"', () => {
      // escribe aquí tu test
      const valor=validator.maskify("4556364607935616");
      const  resultado ="############5616";
      expect(valor).to.equal(resultado);
      
    });

    it.skip('Debería retornar "1" para "1"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "######orld" para "helloworld"', () => {
      // escribe aquí tu test
    });
  });
});
