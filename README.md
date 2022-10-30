# React-Concurrent-Mode

## > Concurrent Mode 에서 지원하는 React 기능을 테스트하기 위한 코드

- 1. Data Fetching ( useEffect, Suspend )
  - 1. Fetch on render : 컴포넌트가 렌더링 되고 난 후에 데이터를 불러오는 방법
  - 2. Fetch then render : 데이터를 불러온 뒤에 컴포넌트를 렌더링하는 방법
  - 3. Render as fetch : 컴포넌트 렌더링과 데이터를 불러오는 작업을 동시에 수행하는 방법
- 2. useTransition : 빈번하게 업데이트 되는 상태값의 렌더링 우선순위를 낮추어 리렌더링 빈도를 줄이는 훅
- 3. useDeferredValue : useTransition 과 동일하나 상태 업데이트 코드를 알 수 없을 경우에 사용
