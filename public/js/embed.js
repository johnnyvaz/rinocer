async function embedChatbot() {
    const t = window.difyChatbotConfig;
  
    if (t && t.token) {
      var e = !!t.isDev;
      const o = t.baseUrl || `https://${e ? "dev." : ""}udify.app`,
        n = `<svg
              id="openIcon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!--... (seu conteúdo SVG) ...-->
            </svg>`,
        i = `<svg
            id="closeIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!--... (seu conteúdo SVG) ...-->
          </svg>`;
  
      if (!document.getElementById("dify-chatbot-bubble-button")) {
        e = document.createElement("div");
        e.id = "dify-chatbot-bubble-button";
        e.style.cssText =
          "position: fixed; bottom: 1rem; right: 1rem; width: 50px; height: 50px; border-radius: 25px; background-color: #155EEF; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px; cursor: pointer; z-index: 2147483647; transition: all 0.2s ease-in-out 0s; left: unset; transform: scale(1); :hover {transform: scale(1.1);}";
  
        const d = document.createElement("div");
        d.style.cssText =
          "display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 2147483647;";
        d.innerHTML = n;
        e.appendChild(d);
        document.body.appendChild(e);
  
        e.addEventListener("click", function () {
          var e = document.getElementById("dify-chatbot-bubble-window");
          e
            ? "none" === e.style.display
              ? ((e.style.display = "block"), (d.innerHTML = i))
              : ((e.style.display = "none"), (d.innerHTML = n))
            : ((e = document.createElement("iframe")),
              (e.allow = "fullscreen;microphone"),
              (e.title = "dify chatbot bubble window"),
              (e.id = "dify-chatbot-bubble-window"),
              (e.src = o + "/chatbot/" + t.token),
              (e.style.cssText =
                "border: none; position: fixed; flex-direction: column; justify-content: space-between; box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px; bottom: 5rem; right: 1rem; width: 24rem; max-width: calc(100vw - 2rem); height: 40rem; max-height: calc(100vh - 6rem);border-radius: 0.75rem; display: flex; z-index: 2147483647; overflow: hidden; left: unset; background-color: #F3F4F6;"),
              document.body.appendChild(e),
              (d.innerHTML = i));
        });
  
        // Simular o clique para abrir a caixa automaticamente
        e.click();
      }
    } else console.error("difyChatbotConfig está vazio ou o token não foi fornecido");
  }
  
  document.body.onload = embedChatbot;
  