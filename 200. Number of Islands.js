/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  let res = 0
  for (let i in grid) {
    for (let j in grid[i]) {
      if (grid[i][j] === '1') {
        res++
        dfs(parseInt(i), parseInt(j), grid)
      }
    }
  }
  return res
}

const dfs = (i, j, a) => {
  if (a[i] === undefined || a[i][j] === undefined || a[i][j] === '0') return
  a[i][j] = '0'
  //four way dfs, if only two way>&v, will count more
  dfs(i + 1, j, a)
  dfs(i - 1, j, a)
  dfs(i, j + 1, a)
  dfs(i, j - 1, a)
}

let grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]
console.log(numIslands(grid))
console.log(grid)
// const fn = (rowindex, colindex) => {}

/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.*/
