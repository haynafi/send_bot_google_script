# Google Sheets to Telegram Bot Integration

This project integrates a Google Sheet with a Telegram bot, allowing for automatic updates to be sent to a Telegram group whenever a specific column in the sheet is modified.

## Features

- Monitors changes to a specified column (in this case, column "tele_user") in a Google Sheet.
- Sends a message to a Telegram group with the updated value from the changed cell, as well as the corresponding values from columns A-E for the same row.
- Provides a custom menu item in the Google Sheets UI to manually trigger the sheet monitoring.

## Prerequisites

- A Google Apps Script project linked to your Google Sheet.
- A Telegram bot token obtained from the BotFather.
- The chat ID of the Telegram group where you want the updates to be sent.

## Installation and Setup

1. Create a new Google Apps Script project by opening your Google Sheet and going to "Tools" > "Script editor".
2. Replace the contents of the script editor with the provided code.
3. Update the `"YOUR_BOT_TOKEN_HERE"` placeholder with your actual Telegram bot token.
4. Save the script.
5. In the script editor, go to "Edit" > "Current project's triggers" and create a new trigger for the `monitorSheetChanges` function, with the event source set to "From spreadsheet" and the event type set to "On open".
6. Grant the necessary permissions when prompted.
7. Test the integration by updating the "tele_user" value in your Google Sheet. The Telegram bot should send a message to the specified group with the updated information.

## Usage

After setting up the integration, any changes made to the "tele_user" column in your Google Sheet will automatically trigger a message to be sent to the Telegram group.

You can also manually trigger the sheet monitoring by clicking on the "Telegram Bot" menu item in the Google Sheets UI and selecting "Monitor Sheet Changes".

## Contributing

If you have any suggestions or find any issues, feel free to open a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
