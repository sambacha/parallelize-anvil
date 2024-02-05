//![RPC]
 // import the getRpcUrls function
const getRpcUrls = require('./globalSetup');
require('jest');

describe('getRpcUrls', () => {

    // Returns an object with 'port' and 'rpcUrls' properties.
    it('should return an object with \'port\' and \'rpcUrls\' properties', () => {
        const result = getRpcUrls({ port: 8080 });
        expect(result).toHaveProperty('port');
        expect(result).toHaveProperty('rpcUrls');
    });

    // 'port' property is equal to the input 'port' parameter.
    it('should set the \'port\' property equal to the input \'port\' parameter', () => {
        const result = getRpcUrls({ port: 8080 });
        expect(result.port).toBe(8080);
    });

    // 'rpcUrls' property is an object with 'default' and 'public' properties.
    it('should set the \'rpcUrls\' property as an object with \'default\' and \'public\' properties', () => {
      const result = getRpcUrls({ port: 8080 });
      expect(result.rpcUrls).toHaveProperty('default');
      expect(result.rpcUrls).toHaveProperty('public');
    });

    // Returns an object with 'port' and 'rpcUrls' properties, even if the input 'port' parameter is undefined.
    it('should return an object with \'port\' and \'rpcUrls\' properties, even if the input \'port\' parameter is undefined', () => {
      const result = getRpcUrls({ port: undefined });
      expect(result).toHaveProperty('port');
      expect(result).toHaveProperty('rpcUrls');
    });

    // Returns an object with 'port' and 'rpcUrls' properties, even if the input 'port' parameter is null.
    it('should return an object with \'port\' and \'rpcUrls\' properties, even if the input \'port\' parameter is null', () => {
      const result = getRpcUrls({ port: null });
      expect(result).toHaveProperty('port');
      expect(result).toHaveProperty('rpcUrls');
    });
});
