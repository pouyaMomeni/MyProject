import { summaryReq, fullReq, cardReq } from "pages/api/_index"
import { useQuery } from "react-query"
const useSummary = () => {
    return useQuery("summary", summaryReq)
}
const useFull = () => {
    return useQuery("full", fullReq)
}
const useCard = () => {
    return useQuery("card", cardReq)
}

export {
    useSummary,
    useFull,
    useCard
}