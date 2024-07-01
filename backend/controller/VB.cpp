#include<bits/stdc++.h> 
#define fastread() (ios_base::sync_with_stdio(false),cin.tie(NULL),cout.tie(NULL)); 
#define pb(x) push_back(x) 
#define all(x) x.begin(),x.end() 
#define test(x) int x; cin>>x; while(x--) 
#define int long long int 
#define print(a,n) for(int i=0;i<n;i++) cout<<a[i]<<" "; 
#define input(a,n) for(int i=0;i<n;i++) cin>>a[i]; 
int M = 1e9 + 7; 
#define endl "\n" 
int ncr(int n, int r) { 
    int res = 1; 
    if (r > n - r) r = n - r; 
    for (int i = 0; i < r; i++) { 
        res *= n - i; 
        res /= i + 1; 
    } 
    return res; 
} 
using namespace std; 
 
int dx[] = {0, 1, 0, -1, -1, 1, 1, -1}; 
int dy[] = {-1, 0, 1, 0, 1, 1, -1, -1}; 
 
int dfs(int node, vector<vector<int>>& adj, vector<bool>& vis, vector<bool>& corrupt) { 
    queue<int> q; 
    int mini = INT_MAX; 
    q.push(node); 
 
    while (!q.empty()) { 
        int x = q.front(); 
        q.pop(); 
        if (x != node && !corrupt[x]) 
            mini = min(mini, x); 
        for (auto it : adj[x]) { 
            if (!vis[it]) { 
                q.push(it); 
                vis[it] = true; 
            } 
        } 
    } 
    return mini == INT_MAX ? -1 : mini; 
} 
 
int solve() { 
    int nodes, edges; 
    cin >> nodes >> edges; 
    int n = nodes; 
    int temp1; 
    cin >> temp1; 
    vector<bool> vis(n + 1, false); 
    vector<vector<int>> adj(n + 1); 
    for (int i = 0; i < edges; i++) { 
        int p, q; 
        cin >> p >> q; 
        adj[p].push_back(q); 
        adj[q].push_back(p); 
    } 
 
    int q; 
    cin >> q; 
    int temp; 
    cin >> temp; 
 
    vector<int> ans; 
    vector<bool> corrupt(n + 1, false); 
    while (q--) { 
        int x, y; 
        cin >> x >> y; 
 
        if (x == 1) { 
            vector<bool> vis(n + 1, false); 
            int mini = y; 
            if (corrupt[y]) { 
                mini = dfs(y, adj, vis, corrupt); 
            } 
            ans.push_back(mini); 
        } else 
            corrupt[y] = true; 
    } 
 
    for (int i = 0; i < ans.size(); i++) 
        cout << ans[i] << endl; 
    return 0; 
} 
 
signed main() { 
    solve(); 
    return 0; 
}
ab usn]\ne bola hqai hqi