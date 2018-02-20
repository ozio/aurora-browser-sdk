import { EventEmitter } from 'eventemitter3';

class AuroraSDK extends EventEmitter implements Aurora {
  private isInitialized: boolean = false;
  private middlewareList: SDKMiddleWare[] = [];

  public init(options: SDKOptions) {
    if (this.isInitialized) return;

    this.emit('init', this);
    this.isInitialized = true;
  }

  public use(middleware: SDKMiddleWare) {
    this.middlewareList.push(middleware);
    middleware.init(this);
  }

  public deinit() {
    this.middlewareList.forEach((middleware) => {
      middleware.deinit();
    });

    this.middlewareList = [];
  }
}

export default new AuroraSDK();
