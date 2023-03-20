import "./css/main.css"
import aiLogo from "./image/chatgpt.png"
import user from "./image/user.jpeg"
import send from "./image/send.png"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Loading from "./componant/Loading"
import VoiceChat from "./componant/VoiceChat"
function App() {
  const [chat, setChat] = useState([])
  const [form, setForm] = useState("")
  const [loader, setLoader] = useState(false)
  const [ai, setai] = useState({})
  useEffect(() => {
    if (ai?.chat) {
      setChat([...chat, ai])
      setLoader(false)
    }
  }, [ai])
  const onSubmit = () => {
    if (form) {
      setLoader(true)
      setChat([...chat, { user: "human", chat: form }]);
      axios.post("http://127.0.0.1:5000/", { message: form })
        .then(res => {
          if (res?.data) {
            setForm("")
            setai(res?.data)
          }
        })
        .catch(err => {
          setForm("")
          setLoader(false)
        })
    }

  }
  const bottomRef = useRef(null);
  const callSbmit = () => {
    alert("i lover you")
  }
  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chat])

  return (
    <>


      {loader && <Loading />}
      {<VoiceChat chatGPT={callSbmit} />}
      <section className="main">
        <section className="m-left">
          <div className="add-chat">
            <span>&#43;</span>
            <span>New Chat</span>
          </div>
        </section>
        <section className="m-right">
          {chat.map(res => {
            return <>
              <div className={res.user == "human" ? "human-chat ai" : "human-chat"} >
                <div>
                  <img src={res.user == "human" ? user : aiLogo} alt="" />
                  <div className="chat">
                    {res?.chat}
                  </div>
                </div>
              </div>
            </>
          })}
          <div ref={bottomRef}></div>
          <div className="ai-query-form">
            <input type="text" onChange={(e) => setForm(e.target.value)} placeholder="Enter Query..." />
            <img onClick={onSubmit} src={send} alt="" />
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
