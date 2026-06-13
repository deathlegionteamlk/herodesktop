import os
import time
from herodesktop import HeroDesktop

def main():
    # 1. Create sandbox
    print("Creating sandbox...")
    desktop = HeroDesktop.create()

    try:
        # 2. Launch app
        print("Launching Firefox...")
        desktop.launch_firefox("https://e2b.dev")
        
        # 3. Wait for it to open
        print("Waiting for Firefox to load...")
        time.sleep(5)

        # 4. Stream it
        print("Starting stream for Firefox window...")
        # Get Firefox window ID
        windows = desktop.get_windows("Firefox")
        window_id = windows[0] if windows else None
        
        url = desktop.start_streaming(window_id=window_id)
        print(f"Stream URL: {url}")
        print("Watch what is happening in your browser!")

        # Keep it open for a bit
        time.sleep(30)

    finally:
        # 5. Shut it down
        print("Shutting down...")
        desktop.shutdown()

if __name__ == "__main__":
    main()
