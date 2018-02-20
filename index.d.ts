declare interface Aurora {
  init(options: SDKOptions);
  use(middleware: SDKMiddleWare);
  deinit();
}

declare interface SDKOptions {

}

declare interface SDKMiddleWare {
  init(aurora: Aurora);
  deinit();
}
