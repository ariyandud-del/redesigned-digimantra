/**
 * DigiMantra Cinematic AI Redesign
 * Interactive Behaviors: Scenario Presets, Architecture Pipeline Engine, Modals, Tabs
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScenarioPresets();
  initCapabilityTabs();
  initModals();
  initForms();
  initScrollEffects();
});

/* --------------------------------------------------------------------------
   01. INTERACTIVE COMMAND CAPSULE & SCENARIO ENGINE
   -------------------------------------------------------------------------- */
const SCENARIOS = {
  nike: {
    input: "Architect Nike global inventory telemetry with sub-100ms sync...",
    title: "NIKE_SUPPLY_CHAIN_INVENTORY_FLOW",
    node1: "Real-time inventory event logs from 90+ global regional distribution centers.",
    node1Tag: "RAW TELEMETRY • KAFKA",
    node2: "Autonomous decision agents detect stockout risk and plan routing adjustments.",
    node2Tag: "LLM INFERENCE • 42ms",
    node3: "Decoupled microservices validate constraints against ERP & warehouse APIs.",
    node3Tag: "KUBERNETES • ZERO DRIFT",
    node4: "Sub-second inventory synchronization with zero order discrepancy.",
    node4Tag: "100% SPRINT SUCCESS",
    throughput: "18.4 GB/s",
    latency: "68 ms",
    uptime: "99.995%",
    security: "ISO 27001 SECURED"
  },
  agentic: {
    input: "Deploy autonomous multi-agent swarm for enterprise document triage...",
    title: "AUTONOMOUS_MULTI_AGENT_SWARM",
    node1: "Unstructured enterprise documents, PDF invoices, and CRM tickets streamed in real-time.",
    node1Tag: "MULTI-MODAL INGEST • 10K/SEC",
    node2: "Fine-tuned domain agents decompose tasks, verify semantic citations, and call tools.",
    node2Tag: "AGENT SWARM • 38ms",
    node3: "Vector knowledge base & deterministic guardrail enclaves prevent hallucination.",
    node3Tag: "VECTOR RAG • ZERO LEAKAGE",
    node4: "Automated ticket resolution & verified ERP update dispatched without human intervention.",
    node4Tag: "65% TIME SAVED",
    throughput: "34.2 GB/s",
    latency: "44 ms",
    uptime: "99.999%",
    security: "SOC2 & ISO VERIFIED"
  },
  adobe: {
    input: "Accelerate T-Mobile commerce rollout with zero critical defects...",
    title: "ADOBE_COMMERCE_HIGH_CONCURRENCY",
    node1: "Simulated multi-million consumer traffic surge for flagship product launch.",
    node1Tag: "CONCURRENT SESSIONS • 2.5M+",
    node2: "Dynamic caching and edge inference optimize real-time cart checkout pipelines.",
    node2Tag: "EDGE COMPUTE • 18ms",
    node3: "Elastic cloud orchestration auto-provisions pods to absorb traffic spikes.",
    node3Tag: "AUTO-SCALE • K8S",
    node4: "100% on-time product launch with zero critical checkout failures.",
    node4Tag: "ZERO LAUNCH DOWNTIME",
    throughput: "42.0 GB/s",
    latency: "22 ms",
    uptime: "100.00%",
    security: "PCI-DSS CERTIFIED"
  },
  health: {
    input: "Deploy HIPAA-compliant tele-health diagnostic pipeline with Tata MD...",
    title: "TATA_MD_CLINICAL_INTELLIGENCE",
    node1: "Encrypted patient vital streams and diagnostic lab imaging data feeds.",
    node1Tag: "END-TO-END ENCRYPTED",
    node2: "AI-assisted anomaly classification provides diagnostic telemetry to physicians.",
    node2Tag: "CLINICAL AI • 99.4% ACC",
    node3: "Strict zero-trust microsegmentation and automated compliance audit logging.",
    node3Tag: "HIPAA & ISO ENFORCED",
    node4: "Instant clinical consultation availability across remote and urban centers.",
    node4Tag: "SUB-SECOND TELEMETRY",
    throughput: "8.6 GB/s",
    latency: "52 ms",
    uptime: "99.999%",
    security: "HIPAA COMPLIANT"
  }
};

function initScenarioPresets() {
  const chips = document.querySelectorAll('.preset-chip');
  const input = document.getElementById('capsuleInput');
  const runBtn = document.getElementById('runPipelineBtn') || document.getElementById('inspectTelemetryBtn');

  function applyScenario(key) {
    const data = SCENARIOS[key];
    if (!data) return;

    if (input) input.value = data.input;

    // Update terminal title
    const activeTitle = document.getElementById('activePresetTitle');
    if (activeTitle) activeTitle.textContent = data.title;

    // Update nodes
    const n1 = document.getElementById('node1Detail');
    const n1t = document.getElementById('node1Tag');
    const n2 = document.getElementById('node2Detail');
    const n2t = document.getElementById('node2Tag');
    const n3 = document.getElementById('node3Detail');
    const n3t = document.getElementById('node3Tag');
    const n4 = document.getElementById('node4Detail');
    const n4t = document.getElementById('node4Tag');

    if (n1) n1.textContent = data.node1;
    if (n1t) n1t.textContent = data.node1Tag;
    if (n2) n2.textContent = data.node2;
    if (n2t) n2t.textContent = data.node2Tag;
    if (n3) n3.textContent = data.node3;
    if (n3t) n3t.textContent = data.node3Tag;
    if (n4) n4.textContent = data.node4;
    if (n4t) n4t.textContent = data.node4Tag;

    // Update telemetry
    const tp = document.getElementById('valThroughput');
    const lat = document.getElementById('valLatency');
    const up = document.getElementById('valUptime');
    const sec = document.getElementById('valSecurity');

    if (tp) tp.textContent = data.throughput;
    if (lat) lat.textContent = data.latency;
    if (up) up.textContent = data.uptime;
    if (sec) sec.textContent = data.security;
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const presetKey = chip.getAttribute('data-preset');
      applyScenario(presetKey);

      // Trigger slight glow feedback on command capsule
      const capsule = document.getElementById('commandCapsule');
      if (capsule) {
        capsule.style.borderColor = '#00E5FF';
        setTimeout(() => {
          capsule.style.borderColor = '';
        }, 600);
      }
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const pipelineSection = document.getElementById('pipeline-section');
      if (pipelineSection) {
        pipelineSection.scrollIntoView({ behavior: 'smooth' });
        const nodes = document.querySelectorAll('.p-node');
        nodes.forEach((n, i) => {
          setTimeout(() => {
            n.classList.add('active');
          }, i * 150);
        });
      }
    });
  }
}

/* --------------------------------------------------------------------------
   02. CAPABILITY TABS SWITCHER
   -------------------------------------------------------------------------- */
function initCapabilityTabs() {
  const tabBtns = document.querySelectorAll('.caps-tab-btn');
  const panels = document.querySelectorAll('.cap-view-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanelId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   03. MODALS (AUDIT & VIDEO DEMO)
   -------------------------------------------------------------------------- */
function initModals() {
  const auditModal = document.getElementById('auditModal');
  const videoModal = document.getElementById('videoModal');

  const openAuditBtns = document.querySelectorAll('[data-modal="auditModal"]');
  const closeAuditBtn = document.getElementById('closeModalBtn');

  const openVideoBtn = document.getElementById('openDemoVideoBtn');
  const closeVideoBtn = document.getElementById('closeVideoModalBtn');
  const closeAndExploreBtn = document.getElementById('closeAndExploreBtn');

  function open(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openAuditBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      open(auditModal);
    });
  });

  if (closeAuditBtn) {
    closeAuditBtn.addEventListener('click', () => close(auditModal));
  }

  if (openVideoBtn) {
    openVideoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      open(videoModal);
    });
  }

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', () => close(videoModal));
  }

  if (closeAndExploreBtn) {
    closeAndExploreBtn.addEventListener('click', () => {
      close(videoModal);
      const pipe = document.getElementById('pipeline-section');
      if (pipe) pipe.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Backdrop click & Escape key
  [auditModal, videoModal].forEach(m => {
    if (!m) return;
    m.addEventListener('click', (e) => {
      if (e.target === m) close(m);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close(auditModal);
      close(videoModal);
    }
  });
}

/* --------------------------------------------------------------------------
   04. FORM SUBMISSION FEEDBACK
   -------------------------------------------------------------------------- */
function initForms() {
  const quickForm = document.getElementById('quickAuditForm');
  const modalForm = document.getElementById('modalAuditForm');
  const auditModal = document.getElementById('auditModal');

  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('workEmail')?.value || 'enterprise team';
      showToast(`Audit request confirmed for ${email}`);
      quickForm.reset();
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('mWorkEmail')?.value || 'enterprise partner';
      if (auditModal) {
        auditModal.classList.remove('active');
        auditModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      showToast(`Consultation registered for ${email}`);
      modalForm.reset();
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  const desc = toast.querySelector('.toast-desc');
  if (desc && msg) desc.textContent = msg;

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4200);
}

/* --------------------------------------------------------------------------
   05. FLOATING NAV BLUR DYNAMICS
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.style.background = 'rgba(7, 10, 18, 0.85)';
      nav.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    } else {
      nav.style.background = 'rgba(10, 14, 24, 0.65)';
      nav.style.borderColor = 'rgba(255, 255, 255, 0.16)';
    }
  });
}

/* --------------------------------------------------------------------------
   06. MOBILE MENU DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const links = document.querySelectorAll('.mob-link, .mobile-nav-drawer button');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    drawer.classList.add('active');
    toggleBtn.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    drawer.classList.remove('active');
    toggleBtn.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}

