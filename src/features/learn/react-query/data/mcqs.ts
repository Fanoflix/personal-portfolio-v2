import { MCQData } from "../types";

export const mcqData: MCQData = {
  mcqs: {
    Overview: [
      {
        question: "What is TanStack Query primarily designed for?",
        optionA: "A Redux replacement for all client state",
        optionB: "A server state management library",
        optionC: "A form-management library",
        optionD: "A styling solution",
        correctOption: "B",
        explanation:
          "TanStack Query focuses on managing server/fetch state (caching, syncing, invalidation), not local UI state or styling.",
      },
      {
        question:
          "Which of these is not a feature provided out of the box by TanStack Query?",
        optionA: "Cache eviction based on staleness",
        optionB: "Automatic retries on failure",
        optionC: "Built-in form field validation",
        optionD: "Query deduplication",
        correctOption: "C",
        explanation:
          "Form validation belongs to form libraries. TanStack Query handles fetching, caching, retries, deduplication, invalidation, etc.",
      },
      {
        question:
          "True or false: You must use TanStack Query for all data fetching in your app.",
        optionA: "True",
        optionB: "False",
        optionC: "Only for GET requests",
        optionD: "Only for POST requests",
        correctOption: "B",
        explanation:
          "Query is optional—use it where you need caching, synchronization, retries, etc. You can still fetch manually when appropriate.",
      },
      {
        question:
          "Does TanStack Query replace Redux or MobX for global UI state?",
        optionA: "Yes, it's a full global state solution",
        optionB: "No, it manages server state only",
        optionC: "Only if you use it with React Context",
        optionD: "Only in production builds",
        correctOption: "B",
        explanation:
          "It's purely for server/fetch state. Local UI state (forms, UI toggles) still belongs in Redux/MobX/useState/etc.",
      },
      {
        question: "In GraphQL apps, why might you still use TanStack Query?",
        optionA: "It only supports REST",
        optionB:
          "It can cache POST requests (GraphQL) as long as they're side-effect free",
        optionC: "It auto-generates GraphQL schemas",
        optionD: "It replaces Apollo Client entirely",
        correctOption: "B",
        explanation:
          "GraphQL is just POST under the hood. If your query has no side effects, you can cache GraphQL POSTs with Query.",
      },
    ],
    Queries: [
      {
        question:
          "Which hook do you use to fetch and cache data in React Query?",
        optionA: "useMutation",
        optionB: "useFetcher",
        optionC: "useQuery",
        optionD: "useCache",
        correctOption: "C",
        explanation:
          "`useQuery` is the primary data-fetching and caching hook.",
      },
      {
        question: "What arguments does `useQuery` take?",
        optionA: "(queryKey, queryFn, options?)",
        optionB: "(url, config)",
        optionC: "(key, initialData)",
        optionD: "(options, callback)",
        correctOption: "A",
        explanation:
          "The signature is `useQuery(queryKey, queryFn, options?)`.",
      },
      {
        question: 'By default, when does React Query consider data "stale"?',
        optionA: "Immediately",
        optionB: "After 5 minutes",
        optionC: "Never",
        optionD: "After 0 cacheTime",
        correctOption: "A",
        explanation:
          "The default `staleTime` is 0, so data is immediately stale.",
      },
      {
        question:
          "If two components use `useQuery` with the same key simultaneously, what happens?",
        optionA: "They each fetch separately",
        optionB: "The second waits for the first (deduplication)",
        optionC: "Only the first ever fetches",
        optionD: "It throws an error",
        correctOption: "B",
        explanation:
          "React Query deduplicates concurrent queries by key and shares the result.",
      },
      {
        question:
          "You wrote `useQuery('todos', fetchTodos)` but forgot to `return` data—what happens?",
        optionA: "Invalid query key error",
        optionB: "It never resolves and stays loading",
        optionC: "It defaults to empty array",
        optionD: "Throws runtime exception",
        correctOption: "B",
        explanation:
          "If your `queryFn` promise never resolves, the hook stays in loading state.",
      },
      {
        question:
          "Which option stops a query from automatically running on mount?",
        optionA: "enabled: false",
        optionB: "autoFetch: false",
        optionC: "manual: true",
        optionD: "runOnInit: false",
        correctOption: "A",
        explanation:
          "`enabled: false` disables automatic fetching until you set it to true.",
      },
      {
        question:
          "You pass a function as part of your `queryKey`. What must you ensure?",
        optionA: "It's stable (memoized) or the key changes every render",
        optionB: "It's async",
        optionC: "It returns a string",
        optionD: "Nothing special",
        correctOption: "A",
        explanation:
          "Non-memoized functions in keys will change on every render, causing refetch.",
      },
      {
        question: "What does `refetchOnWindowFocus: false` do?",
        optionA: "Permanently disables all refetches",
        optionB: "Disables refetch when window/tab regains focus",
        optionC: "Only disables on mobile",
        optionD: "Requires manual refetch only on focus",
        correctOption: "B",
        explanation:
          "`refetchOnWindowFocus` controls whether stale queries refetch on focus.",
      },
      {
        question: "Can you use `useQuery` for POST requests?",
        optionA: "No, strictly GET only",
        optionB: "Yes, if they're side-effect free (idempotent data fetches)",
        optionC: "Only with `useMutation` fallback",
        optionD: "Only in GraphQL",
        correctOption: "B",
        explanation:
          "React Query doesn't enforce REST verbs. You can cache POSTs if they don't cause side effects.",
      },
      {
        question: "What's the difference between `cacheTime` and `staleTime`?",
        optionA:
          "cacheTime = TTL before garbage collection; staleTime = time before considered fresh",
        optionB: "They're aliases",
        optionC: "cacheTime resets on focus; staleTime never does",
        optionD: "staleTime is deprecated",
        correctOption: "A",
        explanation:
          "`staleTime` controls freshness; `cacheTime` controls how long unused data stays in memory.",
      },
    ],
    Mutations: [
      {
        question:
          "Which hook do you use for non-GET operations (POST/PUT/PATCH/DELETE)?",
        optionA: "useQuery",
        optionB: "useSync",
        optionC: "useMutation",
        optionD: "useMutate",
        correctOption: "C",
        explanation:
          "`useMutation` is designed for create/update/delete operations.",
      },
      {
        question: "What arguments does `useMutation` accept?",
        optionA: "(mutationFn, options?)",
        optionB: "(queryKey, mutationFn)",
        optionC: "(url, data)",
        optionD: "(options, callback)",
        correctOption: "A",
        explanation: "`useMutation(mutationFn, options?)` is its signature.",
      },
      {
        question:
          "Which callback runs _before_ the mutation function executes, useful for optimistic updates?",
        optionA: "onSuccess",
        optionB: "onError",
        optionC: "onMutate",
        optionD: "onSettled",
        correctOption: "C",
        explanation:
          "`onMutate` is called optimistically before the mutationFn resolves.",
      },
      {
        question:
          "If your `mutationFn` throws, which callback lets you roll back optimistic updates?",
        optionA: "onSuccess",
        optionB: "onError",
        optionC: "onSettled",
        optionD: "onFallback",
        correctOption: "B",
        explanation:
          "`onError` receives context from `onMutate` so you can undo optimistic changes.",
      },
      {
        question:
          "Does `useMutation` automatically update related queries in the cache?",
        optionA: "Yes, for all queries",
        optionB: "No, you must invalidate or manually update them",
        optionC: "Only if keys match exactly",
        optionD: "Only in v5",
        correctOption: "B",
        explanation:
          "Mutations don't auto-refresh data; you must call `invalidateQueries` or manually update the cache.",
      },
      {
        question:
          "What does returning a value from `onMutate` allow you to do?",
        optionA: "Skip mutation",
        optionB: "Pass context to onError/onSettled for rollback",
        optionC: "Chain another mutation automatically",
        optionD: "Auto-refresh the page",
        correctOption: "B",
        explanation:
          "`onMutate` can return rollback context, used in `onError` to revert state.",
      },
      {
        question:
          "Is it safe to call `mutation.mutate()` more than once concurrently?",
        optionA: "Yes, each call is isolated",
        optionB: "No, it queues them automatically",
        optionC: "It throws a concurrency error",
        optionD: "Only in React 18",
        correctOption: "A",
        explanation:
          "Each `mutate()` call is independent; you can fire multiple mutations in parallel.",
      },
      {
        question: "Which option prevents a mutation from retrying on failure?",
        optionA: "retry: 0",
        optionB: "retryOnError: false",
        optionC: "noRetry: true",
        optionD: "retry: false",
        correctOption: "A",
        explanation: "`retry: 0` disables automatic retries; default is 3.",
      },
      {
        question:
          "How do you tag a mutation so you can invalidate related queries easily?",
        optionA: "Mutations don't support keys",
        optionB: "Use `mutationKey` option",
        optionC: "Use `queryKey` option",
        optionD: "Use `tags` in options",
        correctOption: "B",
        explanation:
          "`mutationKey` lets you reference mutations in devtools, but invalidation is done via query keys.",
      },
      {
        question:
          "What's the recommended place to call `invalidateQueries` after a successful mutation?",
        optionA: "Inside `onSuccess`",
        optionB: "Inside `mutationFn`",
        optionC: "In component's render",
        optionD: "In global error boundary",
        correctOption: "A",
        explanation:
          "Use `onSuccess` callback to invalidate queries once your mutation has completed.",
      },
    ],
    "Query Invalidation": [
      {
        question:
          "Which method on `queryClient` invalidates cached queries by key?",
        optionA: "resetQueries",
        optionB: "invalidateQueries",
        optionC: "removeQueries",
        optionD: "refreshQueries",
        correctOption: "B",
        explanation:
          "`invalidateQueries` flags queries as stale so they refetch next time they're used.",
      },
      {
        question:
          "What does `refetchActive: false` do when passed to `invalidateQueries`?",
        optionA: "Only marks them stale without refetching right away",
        optionB: "Refetches all, active or not",
        optionC: "Removes all from cache",
        optionD: "Throws an error",
        correctOption: "A",
        explanation:
          "By default invalidation refetches active queries; `refetchActive: false` stops immediate refetch.",
      },
      {
        question:
          "True or false: `invalidateQueries` can accept a predicate function instead of a key.",
        optionA: "True",
        optionB: "False",
        optionC: "Only in v4",
        optionD: "Only in React Native",
        correctOption: "A",
        explanation:
          "You can pass a function `(query) => boolean` to target queries dynamically.",
      },
      {
        question:
          "What happens if you call `queryClient.invalidateQueries()` with no args?",
        optionA: "Invalidates all queries",
        optionB: "Does nothing",
        optionC: "Clears the cache",
        optionD: "Throws missing argument error",
        correctOption: "A",
        explanation: 'No args means "all queries."',
      },
      {
        question:
          "What's the difference between `refetchQueries` and `invalidateQueries` on mutations?",
        optionA: "They're aliases",
        optionB:
          "`refetchQueries` refetches immediately; `invalidateQueries` only flags stale",
        optionC: "`invalidateQueries` is deprecated",
        optionD: "`refetchQueries` only works with queries",
        correctOption: "B",
        explanation:
          "`refetchQueries` triggers immediate fetch; `invalidateQueries` waits until next mount/focus.",
      },
      {
        question:
          "Which option to `invalidateQueries` also refetches inactive queries?",
        optionA: "refetchInactive: true",
        optionB: "includeInactive: true",
        optionC: "alwaysRefetch: true",
        optionD: "all: true",
        correctOption: "B",
        explanation:
          "`includeInactive` will refetch queries regardless of active status.",
      },
      {
        question:
          "How do you delay invalidation until after a certain event (e.g. tab close)?",
        optionA: "Impossible",
        optionB: "Use `invalidateOnMount` option",
        optionC: "Call `invalidateQueries` in custom event listener",
        optionD: "Set `delay` in options",
        correctOption: "C",
        explanation:
          "You control when to call `invalidateQueries`; there's no built-in delay setting.",
      },
      {
        question:
          "Does invalidation work across browser tabs when using `persistQueryClient`?",
        optionA: "Yes, it syncs across tabs",
        optionB: "No, each tab is isolated",
        optionC: "Only with `refetchOnWindowFocus`",
        optionD: "Only in v5+",
        correctOption: "A",
        explanation:
          "With the persistence plugin you can broadcast invalidations across tabs.",
      },
    ],
    "Optimistic Updates": [
      {
        question:
          "Which handler is best for applying optimistic cache updates?",
        optionA: "onSuccess",
        optionB: "onMutate",
        optionC: "onSettled",
        optionD: "onInactive",
        correctOption: "B",
        explanation:
          "`onMutate` runs before the mutationFn resolves, perfect for optimistic changes.",
      },
      {
        question: "How do you revert an optimistic update after an error?",
        optionA: "queryClient.reset()",
        optionB: "Use context returned from onMutate inside onError",
        optionC: "invalidateQueries automatically reverts",
        optionD: "call mutate.rollback()",
        correctOption: "B",
        explanation:
          "Return a rollback context from onMutate and call it in onError.",
      },
      {
        question:
          "What does `queryClient.setQueryData` do in optimistic flows?",
        optionA: "Replaces cache data synchronously",
        optionB: "Schedules data for later",
        optionC: "Removes the query",
        optionD: "Throws if key not found",
        correctOption: "A",
        explanation:
          "It immediately updates the cache for a key—ideal for optimistic UI updates.",
      },
      {
        question: "What is a 'rollback context' in optimistic updates?",
        optionA: "A subscription token",
        optionB: "Snapshot of previous cache to restore on error",
        optionC: "A REST convention",
        optionD: "A GraphQL directive",
        correctOption: "B",
        explanation:
          "You capture previous state in onMutate and use it in onError to roll back.",
      },
      {
        question:
          "True or false: You must wait for onSuccess before updating dependent queries.",
        optionA: "True",
        optionB: "False",
        optionC: "Only in v4",
        optionD: "Only if retry > 0",
        correctOption: "B",
        explanation:
          "You can optimistically update dependent queries in onMutate and then invalidate onSuccess.",
      },
      {
        question:
          "Which API lets you 'undo' a cache set if the mutation ultimately fails?",
        optionA: "setQueryDataUndo()",
        optionB: "cancelQueries()",
        optionC: "resetQueries()",
        optionD: "Use the rollback context in onError",
        correctOption: "D",
        explanation:
          "There's no built-in undo—use your own rollback context from onMutate in onError.",
      },
    ],
    "Misc Gotchas": [
      {
        question: "What does the `placeholderData` option do in useQuery?",
        optionA:
          "Shows initial UI while loading, without marking data as fresh",
        optionB: "Ignores cacheTime",
        optionC: "Auto-invalidates after placeholder expires",
        optionD: "Replaces staleTime",
        correctOption: "A",
        explanation:
          "`placeholderData` seeds the UI with a value until the real data arrives, but it doesn't change freshness.",
      },
      {
        question: "Which hook supports cursor-based infinite scrolling?",
        optionA: "useQuery",
        optionB: "useInfiniteQuery",
        optionC: "usePaginatedQuery",
        optionD: "useScrollQuery",
        correctOption: "B",
        explanation:
          "`useInfiniteQuery` is designed for cursor/offset-based fetching in pages.",
      },
      {
        question: "How do you fetch a specific page in a paginated query?",
        optionA: "Pass page number in queryKey and fetchFn",
        optionB: "useQuery(page)",
        optionC: "setPage() global function",
        optionD: "queryClient.fetchPage()",
        correctOption: "A",
        explanation:
          "Include the page param in your queryKey and your queryFn reads it to fetch that page.",
      },
      {
        question:
          "True or false: `keepPreviousData: true` prevents loading state when switching pagination pages.",
        optionA: "True",
        optionB: "False",
        optionC: "Only for infinite queries",
        optionD: "Only in v3",
        correctOption: "A",
        explanation:
          "`keepPreviousData` holds last data in place while fetching the next page.",
      },
      {
        question: "What does `getNextPageParam` do in `useInfiniteQuery`?",
        optionA: "Defines how to retrieve the cursor/param for the next page",
        optionB: "Automatically adds next pages to the cache",
        optionC: "Preloads all pages",
        optionD: "Is deprecated",
        correctOption: "A",
        explanation:
          "`getNextPageParam` tells React Query how to find the key for the next page.",
      },
      {
        question:
          "Which option stops infinite queries from fetching more when `hasNextPage` is false?",
        optionA: "enabled: false",
        optionB: "getNextPageParam returns undefined",
        optionC: "infinite: false",
        optionD: "limit: 0",
        correctOption: "B",
        explanation:
          "If `getNextPageParam` returns `undefined`, React Query knows there's no more data to fetch.",
      },
    ],
  },
};
