# BMAD Loop 002 — Local Storage Persistence

## Goal (1 sentence)
Persist to-do items in localStorage so the list survives a page refresh.

## Build

### Planned changes:

1. **Storage format**
   - Key: `"todos"`
   - Value: JSON string of a plain string array, e.g. `'["Buy milk","Walk the dog"]'`
   - Matches the existing in-memory `todos` array — no schema change.

2. **Load on startup** — new `loadTodos()` function in `src/app.js`:
   - Read `localStorage.getItem("todos")`.
   - If `null` (key absent), leave `todos` as `[]` — first-visit behavior.
   - Otherwise, wrap `JSON.parse()` in a `try/catch`:
     - **Catch** (malformed JSON): log a warning, leave `todos` as `[]`.
   - After parsing, validate: if the result is not an `Array`, discard and use `[]`.
   - Filter out any non-string entries (guard against hand-edited storage).
   - Assign the cleaned array to `todos`.
   - Call `renderList()`.
   - Invoke `loadTodos()` once at script end, replacing the implicit empty start.

3. **Save after mutations** — new `saveTodos()` function in `src/app.js`:
   - Calls `localStorage.setItem("todos", JSON.stringify(todos))`.
   - Called at the end of `addItem()` (after push + render).
   - Called at the end of `removeItem()` (after splice + render).
   - These are the only two mutation points — no other call sites needed.

4. **Declaration change** — `const todos = []` becomes `let todos = []` so `loadTodos()` can reassign it.

### Files to touch:
- `src/app.js` (modify only)

### Constraints:
- `src/index.html` unchanged — no structural or script changes needed.
- `src/style.css` unchanged.
- UI behavior identical to Loop 001 (add, remove, render).
- No new dependencies, no build tools.
- `localStorage` only — no IndexedDB, cookies, or server calls.

---

## Measure

### Manual verification steps:

1. **Fresh start — no stored data**
   - DevTools → Application → Local Storage → clear `"todos"` key if present.
   - Open `src/index.html`.
   - Expected: empty list, no console errors.

2. **Add items, then refresh**
   - Add "Buy milk" and "Walk the dog".
   - Refresh the page.
   - Expected: both items appear in order.

3. **Remove item, then refresh**
   - Remove "Buy milk".
   - Refresh the page.
   - Expected: only "Walk the dog" remains.

4. **Remove all items, then refresh**
   - Remove all items.
   - Refresh the page.
   - Expected: empty list; `"todos"` key in localStorage is `"[]"`.

5. **Corrupt JSON in storage**
   - DevTools console: `localStorage.setItem("todos", "not json")`
   - Refresh the page.
   - Expected: empty list, console warning logged, no crash.

6. **Valid JSON but wrong type**
   - DevTools console: `localStorage.setItem("todos", '"just a string"')`
   - Refresh the page.
   - Expected: empty list — non-array value discarded.

7. **Array with non-string entries**
   - DevTools console: `localStorage.setItem("todos", '[1, "valid", null]')`
   - Refresh the page.
   - Expected: only "valid" appears — non-strings filtered out.

### Expected behavior:
- All Loop 001 verification steps still pass unchanged.
- Items persist across page refresh.
- Invalid or missing storage never causes errors.

---

## Analyze


- What worked: All Measure test cases passed
- What didn't: None
- Unexpected issues: None

---

## Decide

### Decisions locked in:
- Persist todos in `localStorage` under the `"todos"` key as a JSON array of strings.
- Fail-safe behavior: invalid storage results in an empty list instead of a crash.
- Keep the app minimal: add/remove only (no other feature changes in Loop 002).

### Explicitly deferred:
- Mark complete/incomplete
- Editing items
- Reordering
- Filtering/search
- Any backend sync

### Goal for Loop 003:
Push to GitHub and deploy as a static site (GitHub Pages).