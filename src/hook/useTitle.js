import { useEffect } from "react"

const useTitle = title =>{

    useEffect(()=>{
        document.title=`${title}-Dontics Care`git
    },[title])

}

export default useTitle;