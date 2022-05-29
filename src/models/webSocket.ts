import {useState, useEffect} from 'react'
import useWebSocket, {ReadyState} from "react-use-websocket";
import {useModel} from "@@/plugin-model/useModel";


export interface PingMessage {
  messageType: string;
  username: string;
  message: object
}

const pingMessage: PingMessage = {
  messageType: "Ping",
  username: "admin",
  message: {}
};

export default function useSocketModel() {

  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const { setInfoCard } = useModel('refresh', model => ({ setInfoCard: model.setInfoCard }));

  const { lastMessage, readyState, sendMessage } = useWebSocket(socketUrl);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    lastMessage && setMessageHistory((prev) => prev.concat(lastMessage.data));
    console.log(lastMessage?.data)
    if (lastMessage != null) {
      const data = JSON.parse(lastMessage.data)
      if (data.refresh == 1) {
        setInfoCard((pre) => pre + 1)
      }
    }
  }, [lastMessage]);

  useEffect(() => {
    const timer = setInterval(() => {
      sendMessage(JSON.stringify(pingMessage))
    }, 60000)
    // 清除定时器
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    console.log(connectionStatus)
  }, [connectionStatus])

  const handleClickChangeSocketUrl = () => {
    setSocketUrl('ws://127.0.0.1:1254/ws/admin')
    console.log("set new socket!!!")
  }

  return {
    readyState,
    connectionStatus,
    handleClickChangeSocketUrl,
    messageHistory,
    lastMessage
  }
}


