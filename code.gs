function sendTelegramMessage(message, chatId) {
  var token = "BOT_TOKEN";
  var url = "https://api.telegram.org/bot" + token + "/sendMessage";

  var payload = {
    "chat_id": chatId,
    "text": message
  };

  var options = {
    "method": "post",
    "payload": JSON.stringify(payload),
    "contentType": "application/json",
    "muteHttpExceptions": true
  };

  var response = UrlFetchApp.fetch(url, options);
}

function monitorSheetChanges() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1"); // Replace with your sheet name
  var activeCell = sheet.getActiveCell();
  var changedRow = activeCell.getRow();
  var changedColumn = activeCell.getColumn();

  if (changedColumn === 7) { // Column G
    var teleUser = sheet.getRange(changedRow, 7).getValue(); // Column G
    var idGroup = sheet.getRange(changedRow, 6).getValue(); // Column F
    
    // Get values from columns A-E for the changed row
    var numberO = sheet.getRange(changedRow, 1).getValue(); // Column A
    var detail = sheet.getRange(changedRow, 2).getValue(); // Column B
    var cp = sheet.getRange(changedRow, 3).getValue(); // Column C
    var school = sheet.getRange(changedRow, 4).getValue(); // Column D
    var dateData = sheet.getRange(changedRow, 5).getValue(); // Column E
    
    var message = "The value has been updated to: " + teleUser + "\n\n" +
                  "Data details for the updated row:\n" +
                  "Number: " + numberO + "\n" +
                  "Detail: " + detail + "\n" +
                  "CP: " + cp + "\n" +
                  "School: " + school + "\n" +
                  "Date: " + dateData;
                  
    sendTelegramMessage(message, idGroup);
  }
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Telegram Bot')
    .addItem('Monitor Sheet Changes', 'monitorSheetChanges')
    .addToUi();
}
