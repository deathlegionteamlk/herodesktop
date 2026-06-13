import { Sandbox, SandboxOpts } from '@e2b/desktop';

export interface HeroDesktopCreateOpts extends SandboxOpts {
  template?: string;
}

export class HeroDesktop extends Sandbox {
  /**
   * HeroDesktop by Death Legion Team.
   * A powerful virtual desktop sandbox for AI agents.
   */

  // Override create to provide a simpler API while remaining compatible
  static async create(optsOrTemplate?: string | HeroDesktopCreateOpts, opts?: HeroDesktopCreateOpts): Promise<HeroDesktop> {
    let template = 'desktop';
    let options: HeroDesktopCreateOpts = {};

    if (typeof optsOrTemplate === 'string') {
      template = optsOrTemplate;
      options = opts || {};
    } else if (optsOrTemplate) {
      options = optsOrTemplate;
      if (options.template) {
        template = options.template;
      }
    }

    // @ts-ignore - E2B's create return type handling can be tricky with inheritance
    return await super.create(template, options) as HeroDesktop;
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
    await this.kill();
  }
}
