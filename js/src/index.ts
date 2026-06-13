import { Sandbox } from '@e2b/desktop';

export interface HeroDesktopCreateOpts {
  template?: string;
  resolution?: [number, number];
  dpi?: number;
  display?: string;
  timeout?: number;
  [key: string]: any;
}

export class HeroDesktop extends Sandbox {
  /**
   * HeroDesktop by Death Legion Team.
   * A powerful virtual desktop sandbox for AI agents.
   */

  static async create(opts: HeroDesktopCreateOpts = {}): Promise<HeroDesktop> {
    const {
      template = 'desktop',
      resolution,
      dpi,
      display,
      timeout,
      ...rest
    } = opts;

    return await super.create(template, {
      resolution,
      dpi,
      display,
      timeout,
      ...rest,
    }) as HeroDesktop;
  }

  async launchChrome(url?: string): Promise<void> {
    await this.launch('google-chrome', url);
  }

  async launchFirefox(url?: string): Promise<void> {
    await this.launch('firefox', url);
  }

  async launchVSCode(path?: string): Promise<void> {
    await this.launch('code', path);
  }

  async startStreaming(options: {
    windowId?: string;
    requireAuth?: boolean;
    viewOnly?: boolean;
  } = {}): Promise<string> {
    const { windowId, requireAuth = false, viewOnly = false } = options;

    await this.stream.start({
      windowId,
      requireAuth,
    });

    const authKey = requireAuth ? this.stream.getAuthKey() : undefined;
    return this.stream.getUrl({
      authKey,
      viewOnly,
    });
  }

  async stopStreaming(): Promise<void> {
    await this.stream.stop();
  }

  async getWindows(application: string): Promise<string[]> {
    return await this.getApplicationWindows(application);
  }

  async getCurrentWindow(): Promise<string> {
    return await this.getCurrentWindowId();
  }

  async shutdown(): Promise<void> {
    await this.close();
  }
}
