# HeroDesktop 🦸‍♂️

Built by **Death Legion Team**. The best and most feature-complete open-source virtual desktop sandbox for AI agents.

HeroDesktop allows you to safely run AI agents in an isolated environment with a full desktop interface. Powered by E2B, it provides seamless control and streaming capabilities.

## Features

- 🚀 **On-Demand Desktops**: Start a fresh desktop sandbox in seconds.
- 📦 **Common Apps**: Built-in support for Chrome, Firefox, and VS Code.
- 📺 **Live Streaming**: Stream the entire desktop or a specific application window.
- 🔐 **Security**: Optional password protection and view-only modes for streams.
- ⌨️ **Full Control**: Mouse movement, clicks, dragging, scrolling, typing, and hotkeys.
- 🖥️ **Window Management**: Detect and interact with specific application windows.
- 🐍 **Multi-Language**: Native SDKs for both Python and JavaScript.

## Installation

### Python
```bash
pip install herodesktop
```

### JavaScript/TypeScript
```bash
npm install herodesktop
```

## Quick Start (Python)

```python
from herodesktop import HeroDesktop

# Create a new sandbox
desktop = HeroDesktop.create()

# Launch an app
desktop.launch_chrome("https://google.com")

# Start streaming
url = desktop.start_streaming()
print(f"Stream URL: {url}")

# Basic control
desktop.write("Hello World!")

# Shutdown
desktop.shutdown()
```

## Quick Start (JavaScript)

```javascript
import { HeroDesktop } from 'herodesktop';

const desktop = await HeroDesktop.create();

await desktop.launchChrome("https://google.com");

const url = await desktop.startStreaming();
console.log(`Stream URL: ${url}`);

await desktop.write("Hello World!");

await desktop.shutdown();
```

## Examples

Check out the `examples/` directory for more detailed use cases:
- `basic`: Simple sandbox creation and control.
- `streaming_app`: Launching an app and streaming only that window.

## License

MIT - HeroDesktop by Death Legion Team
