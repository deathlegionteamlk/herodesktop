import os
from herodesktop import HeroDesktop

def main():
    # 1. Create sandbox
    print("Creating sandbox...")
    desktop = HeroDesktop.create()

    try:
        # 2. Control it
        print("Moving mouse and typing...")
        desktop.move_mouse(500, 400)
        desktop.left_click()
        
        # Detect current window
        window_id = desktop.get_current_window()
        print(f"Current window ID: {window_id}")
        
        desktop.write("Hello from HeroDesktop!", delay_in_ms=50)
        desktop.press("enter")

        print("Basic control example finished.")

    finally:
        # 3. Shut it down
        print("Shutting down...")
        desktop.shutdown()

if __name__ == "__main__":
    main()
