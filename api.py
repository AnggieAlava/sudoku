from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from typing import List
from sudoku import BacktrackingSolver

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
    )


@app.post('/solve')
def solve(grid: List[List[int]]) -> List[List[int]]:
    solver = BacktrackingSolver(grid)
    solver.solve()
    return solver.board
