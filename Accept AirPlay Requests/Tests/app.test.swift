import Testing
@testable import Accept_AirPlay_Requests

@Suite struct AARBundleTests {
  @Test(arguments: [AARBundle.identifier, AARBundle.name, AARBundle.version, AARBundle.buildNumber])
  func shouldHaveValidMembersValues(value: String) {
    #expect(!value.isEmpty)
  }
}
