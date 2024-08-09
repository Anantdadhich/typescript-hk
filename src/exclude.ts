type Eventt='click'|'scroll'|'mousemove'
type Excludeevent=Exclude<Eventt,'scroll'>

const eventhandle=(event:Excludeevent)=>{
    console.log(`handling event ${event}`)
}

eventhandle('click')