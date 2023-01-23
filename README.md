Automation APPIUM template with 

cucumber + JAVA + APPIUM

To runt the proyect:

Configure Appium server
verify the capabilities configuration in your device in class hook
#cap.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
#cap.setCapability(MobileCapabilityType.DEVICE_NAME, "pixel-device");
initial the virtual device

in the terminal you can execute this commands:
mvn install
mvn clean test