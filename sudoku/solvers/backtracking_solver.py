from sudoku.solvers.base_solver import BaseSolver


class BacktrackingSolver(BaseSolver):
    def solve(self):
        # Backtracking algorithm to solve the Sudoku puzzle
        for row in range(9):
            for col in range(9):
                # Find an empty cell (with value 0)
                if self.board[row][col] == 0:
                    # Try placing numbers from 1 to 9
                    for num in range(1, 10):
                        # Check if it's possible to place 'num' in the current cell
                        if self.is_possible(row, col, num):
                            # Place 'num' in the current cell
                            self.board[row][col] = num

                            # Recursively try to solve the updated board
                            if self.solve():
                                return True  # If successful, return True

                            # If the current placement leads to an invalid solution, backtrack
                            self.board[row][col] = 0

                    # If no valid number can be placed, backtrack to the previous cell
                    return False
        return True  # Puzzle is solved when there are no more empty cells

    def is_possible(self, row, col, num):
        # Check if it's possible to place 'num' in the given row, column, and 3x3 box
        for i in range(9):
            if self.board[i][col] == num or self.board[row][i] == num:
                return False  # 'num' already exists in the row or column

        # Identify the top-left cell of the 3x3 box containing the current cell
        box_x = 3 * (col // 3)
        box_y = 3 * (row // 3)

        # Check if 'num' already exists in the 3x3 box
        for i in range(box_y, box_y + 3):
            for j in range(box_x, box_x + 3):
                if self.board[i][j] == num:
                    return False  # 'num' already exists in the 3x3 box
        return True  # 'num' can be placed in the current cell without conflicts
