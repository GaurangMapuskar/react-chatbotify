import { BUTTON } from "./Utils";
import { Options } from "../types/Options";

import actionDisabledIcon from "../assets/action_disabled_icon.svg";
import botAvatar from "../assets/bot_avatar.svg";
import userAvatar from "../assets/user_avatar.svg";
import chatIcon from "../assets/chat_icon.svg";
import fileAttachmentIcon from "../assets/file_attachment_icon.svg";
import notificationIcon from "../assets/notification_icon.svg";
import closeChatIcon from "../assets/close_chat_icon.svg";
import sendButtonIcon from "../assets/send_icon.svg";
import voiceIcon from "../assets/voice_icon.svg";
import emojiIcon from "../assets/emoji_icon.svg";
import audioIcon from "../assets/audio_icon.svg";
import notificationSound from "../assets/notification_sound.wav";

// default options provided to the bot
const defaultOptions: Options = {
	// tracks state of chat window, also the default state to load it in
	isOpen: false,

	// configurations
	theme: {
		primaryColor: "#42b0c5",
		secondaryColor: "#491d8d",
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', " +
			"'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', " +
			"sans-serif",
		showHeader: true,
		showFooter: true,
		showInputRow: true,
		actionDisabledIcon: actionDisabledIcon,
		embedded: false,
		desktopEnabled: true,
		mobileEnabled: true,
		flowStartTrigger: "ON_LOAD",
	},
	tooltip: {
		mode: "CLOSE",
		text: "Talk to me! 😊",
	},
	chatButton: {
		icon: chatIcon,
	},
	header: {
		title: (
			<div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}} onClick={
				() => window.open("https://github.com/tjtanjin/")
			}>
				Tan Jin
			</div>
		),
		showAvatar: true,
		avatar: botAvatar,
		buttons: [BUTTON.AUDIO_BUTTON, BUTTON.NOTIFICATION_BUTTON, BUTTON.CLOSE_CHAT_BUTTON],
		closeChatIcon: closeChatIcon,
	},
	notification: {
		disabled: false,
		defaultToggledOn: true,
		volume: 0.2,
		icon: notificationIcon,
		sound: notificationSound,
		showCount: true,
	},
	audio: {
		disabled: true,
		defaultToggledOn: false,
		language: "en-US",
		voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
		rate: 1,
		volume: 1,
		icon: audioIcon,
	},
	chatHistory: {
		disabled: false,
		maxEntries: 30,
		storageKey: "rcb-history",
		viewChatHistoryButtonText: "Load Chat History ⟳",
		chatHistoryLineBreakText: "----- Previous Chat History -----",
		autoLoad: false,
	},
	chatInput: {
		disabled: false,
		allowNewline: false,
		enabledPlaceholderText: "Type your message...",
		disabledPlaceholderText: "",
		showCharacterCount: false,
		characterLimit: -1,
		botDelay: 1000,
		sendButtonIcon: sendButtonIcon,
		blockSpam: true,
		sendOptionOutput: true,
		sendCheckboxOutput: true,
		sendAttachmentOutput: true,
		buttons: [BUTTON.VOICE_MESSAGE_BUTTON, BUTTON.SEND_MESSAGE_BUTTON]
	},
	chatWindow: {
		showScrollbar: false,
		autoJumpToBottom: false,
		showMessagePrompt: true,
		messagePromptText: "New Messages ↓",
		messagePromptOffset: 30,
	},
	sensitiveInput: {
		maskInTextArea: true,
		maskInUserBubble: true,
		asterisksCount: 10,
		hideInUserBubble: false,
	},
	userBubble: {
		animate: true,
		showAvatar: false,
		avatar: userAvatar,
		simStream: false,
		streamSpeed: 30,
		dangerouslySetInnerHtml: false,
	},
	botBubble: {
		animate: true,
		showAvatar: false,
		avatar: botAvatar,
		simStream: false,
		streamSpeed: 30,
		dangerouslySetInnerHtml: false,
	},
	voice: {
		disabled: true,
		defaultToggledOn: false,
		language: "en-US",
		timeoutPeriod: 10000,
		autoSendDisabled: false,
		autoSendPeriod: 1000,
		sendAsAudio: false,
		icon: voiceIcon,
	},
	footer: {
		text: (
			<div style={{cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3}} 
				onClick={() => window.open("https://react-chatbotify.tjtanjin.com")}
			>
				<span>Powered By </span>
				<img style={{
					borderRadius: "50%",
					width: 14, height: 14, backgroundImage: `url(${chatIcon}),
					linear-gradient(to right, #42b0c5, #491d8d)`
				}}>
				</img>
				<span style={{fontWeight: "bold"}}> React ChatBotify</span>
			</div>
		),
		buttons: [BUTTON.FILE_ATTACHMENT_BUTTON, BUTTON.EMOJI_PICKER_BUTTON]
	},
	fileAttachment: {
		disabled: false,
		multiple: true,
		accept: ".png",
		icon: fileAttachmentIcon,
		showMediaDisplay: true,
	},
	emoji: {
		disabled: false,
		icon: emojiIcon,
		list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
	},
	advance: {
		useCustomMessages: false,
		useCustomBotOptions: false,
		useCustomPaths: false,
	},

	// styles
	tooltipStyle: {},
	chatButtonStyle: {},
	notificationBadgeStyle: {},
	chatWindowStyle: {},
	headerStyle: {},
	bodyStyle: {},
	chatInputContainerStyle: {},
	chatInputAreaStyle: {},
	chatInputAreaFocusedStyle: {},
	chatInputAreaDisabledStyle: {},
	userBubbleStyle: {},
	botBubbleStyle: {},
	botOptionStyle: {},
	botOptionHoveredStyle: {},
	botCheckboxRowStyle: {},
	botCheckboxNextStyle: {},
	botCheckMarkStyle: {},
	botCheckMarkSelectedStyle: {},
	sendButtonStyle: {},
	sendButtonHoveredStyle: {},
	characterLimitStyle: {},
	characterLimitReachedStyle: {},
	chatHistoryButtonStyle: {},
	chatHistoryButtonHoveredStyle: {},
	chatHistoryLineBreakStyle: {},
	chatMessagePromptStyle: {},
	chatMessagePromptHoveredStyle: {},
	footerStyle: {},
	loadingSpinnerStyle: {},
	mediaDisplayContainerStyle: {},
}

/**
 * Retrieves default values for bot options.
 */
export const getDefaultBotOptions = () => {
	return defaultOptions;
}

/**
 * Retrieves the options for a theme via CDN.
 * 
 * @param theme theme to retrieve options for
 */
const getThemeOptions = async (theme: string): Promise<Options> => {
	try {
		// prepare json and css urls
		const themeBaseUrl = import.meta.env.VITE_THEME_BASE_CDN_URL;
    
		if(!themeBaseUrl) {
			throw Error('base url not found in .env file');
		}
    
		const jsonFile = "options.json";
		const cssFile = "styles.css";
		const jsonUrl = `${themeBaseUrl}/${theme}/${jsonFile}`;
		const cssUrl = `${themeBaseUrl}/${theme}/${cssFile}`;

		// load css
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = cssUrl;
		document.head.appendChild(link);

		// load json
		const response = await fetch(jsonUrl);
		if (!response.ok) {
			console.log(`Failed to fetch theme ${theme}`);
			return {}
		}
		return await response.json();
	} catch (error) {
		console.log(`Failed to fetch theme ${theme} - ${error}`);
		return {}
	}
}

/**
 * Parses default options with user provided options to generate final bot options.
 * 
 * @param providedOptions options provided by the user to the bot
 * @param theme theme provided by the user to the bot
 */
export const parseBotOptions = async (providedOptions: Options | undefined,
	theme: string | undefined | Array<string>): Promise<Options> => {
	
	// if no provided options or theme, then just load default options
	if (providedOptions == null && theme == null) {
		return defaultOptions;
	}

	let combinedOptions = defaultOptions;
	if (theme != null) {
		if (Array.isArray(theme)) {
			for (const selectedTheme of theme) {
				const themeOptions = await getThemeOptions(selectedTheme);
				combinedOptions = getCombinedOptions(themeOptions, defaultOptions);
			}
		} else {
			const themeOptions = await getThemeOptions(theme);
			combinedOptions = getCombinedOptions(themeOptions, defaultOptions);
		}
	}

	if (providedOptions != null) {
		combinedOptions = getCombinedOptions(providedOptions, combinedOptions);
	}

	// enforces value for bot delay does not go below 500
	if (combinedOptions.chatInput?.botDelay != null && combinedOptions.chatInput?.botDelay < 500) {
		combinedOptions.chatInput.botDelay = 500;
	}

	return combinedOptions;
}

/**
 * Combines default and provided options.
 * 
 * @param providedOptions options provided by the user to the bot
 * @param baseOptions the base options that the provided options will overwrite
 */
const getCombinedOptions = (preferredOptions: Options, baseOptions: Options): Options => {
	const stack: Array<{ source: object, target: object }> = [{ source: preferredOptions, target: baseOptions }];
	
	while (stack.length > 0) {
		const poppedItem = stack.pop();
		if (poppedItem == null) {
			continue;
		}

		const { source, target } = poppedItem;
		for (const key of Object.keys(source)) {
			const keyAsObjectType = key as keyof object;
			if (
				typeof source[keyAsObjectType] === 'object' && 
				source[keyAsObjectType] !== null && 
				keyAsObjectType !== 'buttons'
			) {
				stack.push({ source: source[keyAsObjectType], target: target[keyAsObjectType] });
			} else {
				target[keyAsObjectType] = source[keyAsObjectType];
			}
		}
	}

	return baseOptions;
}