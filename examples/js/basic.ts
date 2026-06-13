import { HeroDesktop } from '../../js/src';

// Set your E2B API key
// process.env.E2B_API_KEY = 'your-api-key';

async function main() {
  // 1. Create sandbox
  console.log('Creating sandbox...');
  const desktop = await HeroDesktop.create();

  try {
    // 2. Control it
    console.log('Moving mouse and typing...');
    await desktop.moveMouse(500, 400);
    await desktop.leftClick();
    await desktop.write('Hello from HeroDesktop JS!', { delayInMs: 50 });
    
    // Press Enter
    await desktop.press('enter');

    console.log('Basic control example finished.');

  } finally {
    // 3. Shut it down
    console.log('Shutting down...');
    await desktop.shutdown();
  }
}

main().catch(console.error);
