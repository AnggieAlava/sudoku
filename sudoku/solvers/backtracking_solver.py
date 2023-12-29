from sudoku.solvers.base_solver import BaseSolver

class BacktrackingSolver(BaseSolver):

    def solve(self):
        for i in range(9):
            for j in range(9):
                if self.board[i][j] == 0:
                    for n in range(1, 10):
                        if self.possible(i, j, n):
                            self.board[i][j] = n
                            if self.solve():
                                return True
                            self.board[i][j] = 0
                    return False
        return True
    
    def possible(self, row, col, n):
        for i in range(9):
            if self.board[i][col] == n or self.board[row][i] == n:
                return False
        box_x = 3 * (col // 3)
        box_y = 3 * (row // 3)
        for i in range(box_y, box_y + 3):
            for j in range(box_x, box_x + 3):
                if self.board[i][j] == n:
                    return False
        return True