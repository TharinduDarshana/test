
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()

    .forBrowser('chrome')
    .build();
    driver.manage().window().maximize();   
//var driver = new webdriver.Builder().build();
driver.get('http://www.google.com');

//var element = driver.findElement(webdriver.By.name('q'));
//element.sendKeys('Cheese!');
//var element = driver.findElement(webdriver.By.name('btnK'));
//element.click();
//element.submit();

var element =  driver.findElement
(webdriver.By.xpath('//*[@id="tsf"]/div[2]/div/div[1]/div/div[1]/input')).sendKeys("cat");
//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
var element = driver.findElement
(webdriver.By.xpath('//*[@id="tsf"]/div[2]/div/div[3]/center/input[1]')).click();


var element1 = driver.findElement(locator);
driver.actions().click(element1).sendKeys(Key.CONTROL,"t").perform();

//var selectLinkOpeninNewTab = Keys.chord(Keys.CONTROL,"t");  
  //driver.findElement(By.css("body")).sendKeys(selectLinkOpeninNewTab);

//var element = driver.get(baseUrl);
//var element = driver.findElement(webdriver.By.cssSelector('title="https://en.wiktionary.org/wiki/cat" width="186" alt="Image result for cat" data-atf="3"')).click();

//driver.get('http://www.facebook.com');
/*
driver.getTitle().then(function(title) {
  console.log('Page title is: ' + title);
});

driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
  });
}, 3000);

driver.getTitle().then(function(title) {
  console.log('Page title is: ' + title);
});

//driver.quit();
*/