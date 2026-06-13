# HeroDesktop 🦸‍♂️ - The Ultimate Virtual Desktop Sandbox for AI Agents

[![GitHub](https://img.shields.io/github/license/deathlegionteamlk/herodesktop)](https://github.com/deathlegionteamlk/herodesktop)
[![PyPI](https://img.shields.io/pypi/v/herodesktop)](https://pypi.org/project/herodesktop/)
[![npm](https://img.shields.io/npm/v/herodesktop)](https://www.npmjs.com/package/herodesktop)

Built by **Death Legion Team**. HeroDesktop is the premier open-source **virtual desktop sandbox** specifically engineered for **AI agents** and **AI computer use**. It provides a secure, isolated, and streamable environment where autonomous agents can interact with real desktop applications just like a human.

## Why HeroDesktop?

HeroDesktop solves the "Computer Use" challenge for AI agents by providing a robust infrastructure powered by **E2B**. Whether you are building an agent to automate browser tasks, manage cloud infrastructure, or perform complex desktop workflows, HeroDesktop offers the most feature-complete **isolated desktop environment**.

## Key Features

- 🚀 **On-Demand Desktops**: Instantly spin up a fresh Linux desktop sandbox.
- 📦 **Pre-installed Apps**: Native support for **Google Chrome**, **Firefox**, and **VS Code**.
- 📺 **VNC Live Streaming**: High-performance streaming of the entire desktop or specific app windows.
- 🔐 **Secure Access**: Integrated password protection and **view-only mode** for safe sharing.
- ⌨️ **Advanced Computer Control**: Precise mouse movement, drag-and-drop, scrolling, and keyboard automation.
- 🖥️ **Window Detection**: Automatically detect and focus on specific application windows.
- 🐍 **Universal SDK**: Simple and consistent SDKs for both **Python** and **JavaScript/TypeScript**.

## Installation

### Python SDK
```bash
pip install herodesktop
```

### JavaScript/TypeScript SDK
```bash
npm install herodesktop
```

## Quick Start (Python)

```python
from herodesktop import HeroDesktop

# Initialize the virtual desktop sandbox
desktop = HeroDesktop.create()

# Launch a browser for AI computer use
desktop.launch_chrome("https://e2b.dev")

# Get a streamable browser URL to watch the agent
url = desktop.start_streaming()
print(f"Watch live: {url}")

# Automate keyboard and mouse
desktop.write("HeroDesktop is awesome!")
desktop.press("enter")

# Gracefully shutdown
desktop.shutdown()
```

## Quick Start (JavaScript)

```javascript
import { HeroDesktop } from 'herodesktop';

const desktop = await HeroDesktop.create();

// Open VS Code in the sandbox
await desktop.launchVSCode();

// Stream a specific window only
const windows = await desktop.getWindows('code');
const url = await desktop.startStreaming({ windowId: windows[0] });
console.log(`Stream URL: ${url}`);

await desktop.shutdown();
```

## Use Cases

*   **AI Agent Testing**: Safely test autonomous agents in an isolated sandbox.
*   **Browser Automation**: High-level control over Chrome and Firefox.
*   **Cloud IDE for Agents**: Give your agents access to VS Code in a secure environment.
*   **Computer Use Benchmarking**: Evaluate AI models on desktop interaction tasks.

## Examples

Explore more in the `examples/` folder:
- `basic.py`: Simple mouse and keyboard control.
- `streaming_app.ts`: Multi-window detection and targeted streaming.

## Technical Details

HeroDesktop uses **Xvfb** for headless display management and **x11vnc** with **noVNC** for streaming. It is built to be compatible with the latest E2B Desktop templates.

## Keywords
AI Agents, Virtual Desktop, Sandbox, Computer Use, E2B, Remote Desktop, AI Automation, Isolated Environment, Python SDK, JavaScript SDK, Chrome Automation, VS Code Sandbox.

## License

MIT © [Death Legion Team](https://github.com/deathlegionteamlk)
