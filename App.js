import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
      source={{
        uri: 'https://asemfront.vercel.app/',
      }}
    />
  );
}
