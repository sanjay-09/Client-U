import { graphQL } from '@/Client/graphQlClient';
import { getCurrentUser } from '@/graphql/query/user';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'


export const useCurrentUser=()=>{
   
    const query = useQuery(
        { 
            queryKey: ['current-user'], 
            queryFn: ()=>graphQL.request(getCurrentUser)
        }
    )
    return { ...query, user: query.data?.getCurrentUser}

}


