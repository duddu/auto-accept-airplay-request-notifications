import AppKit.NSAlert
import AppKit.NSApplication
import AppKit.NSWorkspace

@MainActor
public struct AARAlert {
  private let alert: NSAlert
  private lazy var delegate = AARAlertDelegate()
  private let footerText = "\(AARBundle.name)\nv\(AARBundle.version) (\(AARBundle.buildNumber))"

  private init(
    style: NSAlert.Style,
    title: String,
    message: String,
    okButtonTitle: String?,
    cancelButtonTitle: String?
  ) {
    alert = NSAlert()
    alert.alertStyle = style
    alert.messageText = title
    alert.informativeText = "\(message)\n\n\(footerText)"
    alert.addButton(withTitle: okButtonTitle ?? "OK")
    if let cancelButtonTitle {
      alert.addButton(withTitle: cancelButtonTitle)
    }
    alert.showsHelp = true
    alert.delegate = delegate
  }

  private func run() -> NSApplication.ModalResponse {
    return alert.runModal() == .alertFirstButtonReturn ? .OK : .cancel
  }

  static public func display(
    style: NSAlert.Style,
    title: String,
    message: String,
    okButtonTitle: String? = nil,
    cancelButtonTitle: String? = nil
  ) -> NSApplication.ModalResponse {
    Self
      .init(
        style: style,
        title: title,
        message: message,
        okButtonTitle: okButtonTitle,
        cancelButtonTitle: cancelButtonTitle
      )
      .run()
  }
}

private final class AARAlertDelegate: NSObject, NSAlertDelegate, AARLoggable {
  private let docsUrlStr = "https://auto-accept-airplay-requests.duddu.dev/#get-started"

  public func alertShowHelp(_: NSAlert) -> Bool {
    logger.debug("alert show help")

    if let docsUrl = URL(string: docsUrlStr) {
      logger.debug("opening docs url")

      NSWorkspace.shared.open(docsUrl)
    }

    return true
  }
}
