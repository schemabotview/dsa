"""Run every example and compare its stdout with the committed .out file.

The code cards in src/scenes import these .py and .out files verbatim (vite `?raw`), so
`npm run examples` is what makes the code and output shown on screen true.

    python3 examples/run.py            # check
    python3 examples/run.py --update   # rewrite .out files from a fresh run
"""
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
PY = shutil.which("python3.14") or sys.executable
update = "--update" in sys.argv
failed = 0

for out in sorted(ROOT.glob("ch*/*.out")):
    script = out.with_suffix(".py")
    run = subprocess.run([PY, script.name], cwd=script.parent, capture_output=True, text=True)
    got = run.stdout + run.stderr
    if update:
        out.write_text(got)
        print(f"  wrote {out.relative_to(ROOT)}")
    elif got != out.read_text():
        failed += 1
        print(f"✗ {script.relative_to(ROOT)}: output differs from {out.name}\n{got}")

version = subprocess.run([PY, "-c", "import sys, platform; print(platform.python_implementation(), sys.version.split()[0])"], capture_output=True, text=True).stdout.strip()
if failed:
    sys.exit(f"✗ {failed} example(s) failed under {version}")
print(f"✓ examples match under {version}")
