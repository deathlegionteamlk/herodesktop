from typing import Optional, List, Tuple, Dict, Any, Union
from e2b_desktop import Sandbox
from e2b.connection_config import ApiParams
from typing_extensions import Self, Unpack

class HeroDesktop(Sandbox):
    """
    HeroDesktop by Death Legion Team.
    A powerful virtual desktop sandbox for AI agents.
    """

    @classmethod
    def create(
        cls,
        template: Optional[str] = "desktop",
        resolution: Optional[Tuple[int, int]] = None,
        dpi: Optional[int] = None,
        display: Optional[str] = None,
        timeout: Optional[int] = None,
        **opts: Unpack[ApiParams],
    ) -> Self:
        """
        Start a fresh desktop on demand.
        """
        return super().create(
            template=template,
            resolution=resolution,
            dpi=dpi,
            display=display,
            timeout=timeout,
            **opts,
        )

    def launch_chrome(self, url: Optional[str] = None):
        """Launch Google Chrome."""
        self.launch("google-chrome", url)

    def launch_firefox(self, url: Optional[str] = None):
        """Launch Firefox."""
        self.launch("firefox", url)

    def launch_vscode(self, path: Optional[str] = None):
        """Launch VS Code."""
        self.launch("code", path)

    def start_streaming(
        self, 
        window_id: Optional[str] = None, 
        require_auth: bool = False,
        view_only: bool = False
    ) -> str:
        """
        Start streaming the whole desktop or just one app window.
        Returns the stream URL.
        """
        self.stream.start(window_id=window_id, require_auth=require_auth)
        auth_key = self.stream.get_auth_key() if require_auth else None
        return self.stream.get_url(auth_key=auth_key, view_only=view_only)

    def stop_streaming(self):
        """Stop the stream."""
        self.stream.stop()

    def get_windows(self, application: str) -> List[str]:
        """Get window IDs for an application."""
        return self.get_application_windows(application)

    def get_current_window(self) -> str:
        """Detect the current window ID."""
        return self.get_current_window_id()

    def shutdown(self):
        """Close the sandbox."""
        self.close()
