<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,9,2&height=220&section=header&text=HeroDesktop&fontSize=75&fontColor=ffffff&fontAlignY=38&desc=Virtual%20desktop%20sandboxes%20for%20AI%20agents&descAlignY=60&descSize=20&animation=fadeIn" width="100%"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=2800&pause=900&color=F97316&center=true&vCenter=true&multiline=true&width=620&height=80&lines=Spin+up+a+Linux+desktop.+In+seconds.;Give+your+AI+agents+a+real+screen+to+work+on.;Python+%26+TypeScript+SDKs+included." alt="Typing animation" />

<br/><br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-f97316.svg?style=for-the-badge)](https://github.com/deathlegionteamlk/herodesktop)
[![PyPI](https://img.shields.io/pypi/v/herodesktop?style=for-the-badge&logo=python&logoColor=white&color=3b82f6)](https://pypi.org/project/herodesktop/)
[![npm](https://img.shields.io/npm/v/herodesktop?style=for-the-badge&logo=npm&logoColor=white&color=ef4444)](https://www.npmjs.com/package/herodesktop)
[![Built on E2B](https://img.shields.io/badge/Powered%20by-E2B-8b5cf6?style=for-the-badge)](https://e2b.dev)
[![Built by](https://img.shields.io/badge/Built%20by-Death%20Legion%20Team-1e293b?style=for-the-badge)](https://github.com/deathlegionteamlk)

</div>

---

## 🤔 The problem

AI agents that do "computer use" need somewhere to actually run. You can't point Claude or GPT at your own machine — that's a security disaster. You can't use a VM you provision manually every time — that's too slow. And you can't fake a desktop environment with mocks; agents break the moment the UI doesn't behave like a real one.

HeroDesktop gives agents a real Linux desktop, isolated per-session, that you can spin up in code and tear down when you're done.

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif" width="500"/>
</div>

---

## ⚡ Features

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="80"/>
</div>

<table>
<tr>
<td width="50%">

### 🖥️ On-Demand Desktops
Each `HeroDesktop.create()` call boots a fresh Linux desktop sandbox. No shared state between sessions. Agents start clean every time.

### 📦 Pre-installed Apps
Chrome, Firefox, and VS Code are already in the image. Your agent can open a browser or editor without any setup step.

### 📺 VNC Live Streaming
Watch what your agent is doing in real time. Stream the full desktop or lock it to a specific application window.

### 🔐 Secure Access
Password protection and view-only mode are built in, so you can share a stream URL without handing over control.

</td>
<td width="50%">

### ⌨️ Full Input Control
Mouse movement, clicks, drag-and-drop, scroll, and keyboard input all work exactly as they would on a physical machine.

### 🔍 Window Detection
Detect which windows are open and target a specific one for streaming or interaction — no hardcoded coordinates needed.

### 🐍 Python + TypeScript SDKs
One consistent API, two languages. The SDKs behave the same way so you're not context-switching between docs.

### 🔒 Isolated by Default
Each sandbox is fully isolated. An agent crashing the desktop, or a site doing something unexpected, doesn't affect anything outside the container.

</td>
</tr>
</table>

---

## 📦 Install

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="80"/>
</div>

**Python**
```bash
pip install herodesktop
```

**JavaScript / TypeScript**
```bash
npm install herodesktop
```

---

## 🐍 Python quickstart

```python
from herodesktop import HeroDesktop

# Boot a fresh desktop sandbox
desktop = HeroDesktop.create()

# Open Chrome and navigate to a URL
desktop.launch_chrome("https://e2b.dev")

# Stream the desktop so you can watch what's happening
url = desktop.start_streaming()
print(f"Watch live: {url}")

# Send keyboard input
desktop.write("HeroDesktop works.")
desktop.press("enter")

# Done — shut it down
desktop.shutdown()
```

---

## 🟨 JavaScript / TypeScript quickstart

```javascript
import { HeroDesktop } from 'herodesktop';

const desktop = await HeroDesktop.create();

// Open VS Code in the sandbox
await desktop.launchVSCode();

// Find the VS Code window and stream only that
const windows = await desktop.getWindows('code');
const url = await desktop.startStreaming({ windowId: windows[0] });
console.log(`Stream URL: ${url}`);

await desktop.shutdown();
```

---

## 🧰 What you can build with it

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="350"/>
</div>

| Use case | What HeroDesktop gives you |
|---|---|
| 🤖 **Agent testing** | Isolated sandbox so a broken agent can't touch your actual machine |
| 🌐 **Browser automation** | Chrome and Firefox ready to go, fully controllable |
| 💻 **Cloud IDE for agents** | VS Code in a container, accessible over a stream URL |
| 📊 **Computer use benchmarks** | Reproducible, fresh desktop state for every eval run |
| 🔄 **Workflow automation** | Agents that interact with real GUI apps, not mocked interfaces |

---

## 🗂️ Examples

The `examples/` folder has working code for common patterns:

- **`basic.py`** — mouse and keyboard control from scratch
- **`streaming_app.ts`** — multi-window detection and targeted streaming

---

## 🔧 How it works under the hood

<div align="center">

```
┌──────────────────────────────────────────────────────┐
│                   HeroDesktop Sandbox                │
│                                                      │
│  ┌─────────────┐    ┌──────────────┐                 │
│  │   Xvfb      │───▶│  Apps        │                 │
│  │ (virtual    │    │  Chrome      │                 │
│  │  display)   │    │  Firefox     │                 │
│  └─────────────┘    │  VS Code     │                 │
│         │           └──────────────┘                 │
│         ▼                                            │
│  ┌─────────────┐    ┌──────────────┐                 │
│  │   x11vnc    │───▶│   noVNC      │──▶ Stream URL   │
│  │  (capture)  │    │  (browser    │                 │
│  └─────────────┘    │   viewer)    │                 │
│                     └──────────────┘                 │
│                          E2B Desktop Template        │
└──────────────────────────────────────────────────────┘
         ▲
         │  Python SDK / TypeScript SDK
         │  HeroDesktop.create() / .launch*() / .shutdown()
```

</div>

Xvfb handles the headless display. x11vnc captures it. noVNC turns that into a browser-accessible stream. E2B wraps the whole thing in an isolated container. The SDKs talk to that container through a consistent API so you don't have to think about any of it.

---

## 🤝 Contributing

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="400"/>
</div>

Issues and PRs are open. If something's broken or missing, open an issue before starting work so we can align on direction.

---

## 🛡️ License

MIT © [Death Legion Team](https://github.com/deathlegionteamlk)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,9,2&height=100&section=footer&animation=fadeIn" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=13&duration=4000&pause=1000&color=F97316&center=true&vCenter=true&width=500&lines=Give+your+agents+a+real+desktop.;No+setup.+No+shared+state.+No+mess.;⭐+Star+if+this+saved+you+some+headache." alt="Footer typing" />

</div>
