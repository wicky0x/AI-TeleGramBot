# TextToVideoBot
This is a Text to Video Lip Sync AI Telegram bot that uses Play.ht and Gooey APIs to convert text to a video with perfect lipsync.

This bot is a text-to-speech video generator. It allows users to send text messages to the bot, and the bot converts the text into speech using the Play.ht API. Instead of directly sending the audio response to the user, the bot integrates with the Gooey.ai API to generate a video with synchronized speech.

![AI speech (1)](https://github.com/TrasherTravis/TextToVideoBot/assets/69963432/10b46686-4981-4f45-8bf5-20f43fbc161b)

https://github.com/TrasherTravis/deepfakeaibot/assets/69963432/9fa8a7f2-1109-4ddc-a295-113ef81038a1

Here's how the bot works:

1. The user sends a message to the bot using the "/say" command followed by the desired text.
2. The bot receives the message and extracts the text from it.
3. The bot then initiates the conversion of the text to speech using the Play.ht API. It sends a request to the API, passing the text and voice parameters.
4. The Play.ht API processes the request and returns a transcription ID.
5. The bot periodically checks the status of the conversion using the transcription ID. It sends requests to the Play.ht API to retrieve the conversion status.
6. If the conversion is still in progress, the bot waits for a second and checks again. It continues this process until the conversion is completed and the audio file is available.
7. Once the audio file is ready, the bot uses the Gooey.ai API to generate a video. It sends a request to the API, providing the URL of a face video and the URL of the generated audio file.
8. The Gooey.ai API processes the request and returns a response with the URL of the generated video.
9. The bot checks if the video generation was successful. If it is, the bot sends the video file to the user as the response.
10. If any errors occur during the conversion or video generation process, the bot sends an appropriate error message to the user.

In summary, this bot combines the capabilities of the Play.ht API for text-to-speech conversion and the Gooey.ai API for video generation to create a seamless experience where users can send text messages and receive video responses with synchronized speech.


TG: Travis_BZ | Discord: travis#9295


