# AlgoCode Problem Setting Service 
---
## How Routing is working in Project
**/api/v1/problems/ping**  
\- because the route start with /api

``` css
apiRouter(/api) 
    |
    |
v1Router(/api/v1) 
    |
    |    
problemRouter(/api/v1/problems)
    |
    |
problemController(/api/v1/problems/ping)                
    |
    |
service layer  

 ```

\- Here **problemController** is final middleware , have special thing about that it talks with **service layer** and get the work done and transfer back the response in the corresponding middleware chain.

| Layer | Role |
| --- | --- |
| Router | Maps URL to function |
| Controller | Handles request |
| Service | Business logic |
| Repository | Database queries |