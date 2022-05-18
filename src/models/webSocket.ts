import {useState, useCallback } from 'react'
import useWebSocket, {ReadyState} from "react-use-websocket";

export default function useSocketModel() {

  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('wss://127.0.0.1:1254/ws');
  const [messageHistory, setMessageHistory] = useState([]);

  const { lastMessage, readyState } = useWebSocket(socketUrl);

  useCallback(() => {
    if (lastMessage !== null) {
      // @ts-ignore
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
    console.log(messageHistory)
  }, [lastMessage, messageHistory]);


  const handleClickChangeSocketUrl = () => {
      setSocketUrl('wss://127.0.0.1:1254/ws')
      console.log('!!!!!!!!!!!!!connect change!!!!!!!!!!!!!!!!')
    }


  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];


  return {
    readyState,
    connectionStatus,
    handleClickChangeSocketUrl,
    messageHistory,
    lastMessage
  }
}
