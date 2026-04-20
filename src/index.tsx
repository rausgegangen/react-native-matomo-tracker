import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@rausgegangen/react-native-matomo-tracker' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeMatomoTracker = NativeModules.ReactNativeMatomoTracker
  ? NativeModules.ReactNativeMatomoTracker
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function createTracker(
  uri: String = '',
  siteId: Number = 0,
  token: String = ''
) {
  return ReactNativeMatomoTracker.createTracker(
    uri,
    Platform.OS == 'ios' ? siteId?.toString() : siteId,
    token
  );
}

export function trackScreen(
  screenName: String,
  title: String,
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackScreen(
    screenName,
    title,
    actionDimensions
  );
}

export function trackEvent(
  category: String,
  action: String,
  name: String = '',
  value: Number = 0,
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackEvent(
    category,
    action,
    name,
    value,
    actionDimensions
  );
}

export function trackDispatch() {
  return ReactNativeMatomoTracker.trackDispatch();
}

export function trackOutlink(url: String, actionDimensions?: Array<Object>) {
  return ReactNativeMatomoTracker.trackOutlink(url, actionDimensions);
}

export function trackSearch(keyword: String, actionDimensions?: Array<Object>) {
  return ReactNativeMatomoTracker.trackSearch(keyword, actionDimensions);
}

export function trackImpression(
  contentName: String,
  contentPiece: String = '',
  contentTarget: String = '',
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackImpression(
    contentName,
    contentPiece,
    contentTarget,
    actionDimensions
  );
}

export function trackInteraction(
  contentName: String,
  contentInteraction: String,
  contentPiece: String = '',
  contentTarget: String = '',
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackInteraction(
    contentName,
    contentInteraction,
    contentPiece,
    contentTarget,
    actionDimensions
  );
}

export function trackDownload(
  category: String,
  action: String,
  url: String,
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackDownload(
    category,
    action,
    url,
    actionDimensions
  );
}

export function setUserId(id: string | null) {
  const normalized = id == null || id === '' ? null : id;
  return ReactNativeMatomoTracker.setUserId(normalized);
}

export function setVisitorId(visitorId: String) {
  return ReactNativeMatomoTracker.setVisitorId(visitorId);
}

export function disableTracking() {
  return ReactNativeMatomoTracker.disableTracking();
}

export function enableTracking() {
  return ReactNativeMatomoTracker.enableTracking();
}

export function setLogger() {
  return ReactNativeMatomoTracker.setLogger();
}

export function startSession() {
  return ReactNativeMatomoTracker.startSession();
}

export function trackCampaign(
  title: String,
  campaignUrl: String,
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackCampaign(
    title,
    campaignUrl,
    actionDimensions
  );
}

export function trackMediaEvent({
  siteId,
  mediaId,
  mediaTitle,
  playerName,
  mediaType,
  mediaResource,
  mediaStatus,
  mediaLength = '',
  mediaProgress = '',
  mediaTTP = '',
  mediaWidth = '',
  mediaHeight = '',
  mediaSE = '',
  mediaFullScreen = '',
  dimension = [],
}: {
  siteId: String;
  mediaId: String;
  mediaTitle: String;
  playerName: String;
  mediaType: String;
  mediaResource: String;
  mediaStatus: String;
  mediaLength?: String;
  mediaProgress?: String;
  mediaTTP?: String;
  mediaWidth?: String;
  mediaHeight?: String;
  mediaSE?: String;
  mediaFullScreen?: String;
  customVariable?: String;
  dimension?: Array<Object>;
}): Promise<number> {
  return ReactNativeMatomoTracker.trackMedia(
    siteId,
    mediaId,
    mediaTitle,
    playerName,
    mediaType,
    mediaResource,
    mediaStatus,
    mediaLength,
    mediaProgress,
    mediaTTP,
    mediaWidth,
    mediaHeight,
    mediaSE,
    mediaFullScreen,
    dimension
  );
}

export function setCustomDimension(id: number, value: string | null) {
  return ReactNativeMatomoTracker.setCustomDimension(id, value);
}

export function trackCustomDimension({
  dimensions,
}: {
  dimensions?: Array<Object>;
}): Promise<number> {
  return ReactNativeMatomoTracker.trackCustomDimension(dimensions);
}

export function trackGoal(
  goalId: number,
  revenue: number,
  actionDimensions?: Array<Object>
) {
  return ReactNativeMatomoTracker.trackGoal(goalId, revenue, actionDimensions);
}

export const MediaType = { VIDEO: 'video', AUDIO: 'audio' };
