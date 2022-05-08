module.exports ={
 absoluteSumoDir: '',
 sumoDir: '.sumo',
 resumeDir: '.resume',
 baselineDir: '.sumo/baseline',
 killedDir: '.sumo/killed',
 liveDir: '.sumo/live',
 mutantsDir: '.sumo/mutants',
 targetDir: '',
 contractsDir: '',
 testDir: '',
 buildDir: '',
 skipContracts: [],
 skipTests: [],
 testUtils: [],
 ganache: true,
 optimized: true,
 tce: true,
 customTestScript: false,
 regression: false,
 testingTimeOutInSec: 300,
 contractsGlob: '/**/*.sol',
 packageManagerGlob: ['/package-lock.json', '/yarn.lock'],
 testConfigGlob: ['/truffle-config.js', '/hardhat.config.js', '/hardhat.config.ts'],
 testsGlob: '/**/*.{js,sol,ts}',
}
