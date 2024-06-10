import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const VoiceRecognition = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser error.</span>;
  }

  return (
    <div>
      <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <div>
        <p>Listening: {listening ? "Yes" : "No"}</p>
        <p>Transcript: {transcript}</p>
      </div>
    </div>
  );
};
