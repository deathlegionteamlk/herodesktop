import { HeroDesktop } from '../../js/src';

async function main() {
  // 1. Create sandbox
  console.log('Creating sandbox...');
  const desktop = await HeroDesktop.create();

  try {
    // 2. Launch app
    console.log('Launching Chrome...');
    await desktop.launchChrome('https://e2b.dev');
    
    // 3. Wait for it to open
    console.log('Waiting for Chrome to load...');
    await desktop.wait(5000);

    // 4. Stream it
    console.log('Starting stream for Chrome window...');
    // Get Chrome window ID
    const windows = await desktop.getWindows('Google-chrome');
    const windowId = windows[0];
    
    const url = await desktop.startStreaming({
        windowId,
        viewOnly: true // Example of view only mode
    });
    console.log(`Stream URL (View Only): ${url}`);
    console.log('Watch what is happening in your browser!');

    // Keep it open for a bit
    await desktop.wait(30000);

  } finally {
    // 5. Shut it down
    console.log('Shutting down...');
    await desktop.shutdown();
  }
}

main().catch(console.error);
