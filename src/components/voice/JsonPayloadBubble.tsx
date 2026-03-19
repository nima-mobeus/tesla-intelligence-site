'use client';

import React, { useState, useCallback } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  X,
  Code2,
  Layers,
  Minus,
  GitBranch,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

interface CardDef {
  type: string;
  props: Record<string, any>;
  span?: 'full';
  _changed?: boolean;
}

interface GridViewProps {
  badge?: string;
  layout?: string;
  cards?: CardDef[];
  footerLeft?: string;
  footerRight?: string;
  maxRows?: number;
}

interface GenerativeSubsection {
  id: string;
  templateId: string;
  props: GridViewProps | Record<string, any>;
}

interface ScenePayload {
  generativeSubsections?: GenerativeSubsection[];
  // Also accept flat (direct RPC) format
  id?: string;
  type?: string;
  badge?: string;
  layout?: string;
  cards?: CardDef[];
  footerLeft?: string;
  footerRight?: string;
  maxRows?: number;
}

type ResponseMode = 'no-change' | 'partial-change' | 'full-change';

// ── Helpers ────────────────────────────────────────────────────────────────

function detectMode(payload: ScenePayload): ResponseMode {
  const subs = payload.generativeSubsections;
  if (subs?.length === 1 && subs[0].templateId === 'no-change') return 'no-change';
  if (payload.id === 'no-change') return 'no-change';
  const cards = extractCards(payload);
  if (cards.some((c) => c._changed)) return 'partial-change';
  return 'full-change';
}

function extractGridProps(payload: ScenePayload): GridViewProps {
  const subs = payload.generativeSubsections;
  if (subs?.length && subs[0].templateId !== 'no-change') {
    return subs[0].props as GridViewProps;
  }
  return {
    badge: payload.badge,
    layout: payload.layout,
    cards: payload.cards,
    footerLeft: payload.footerLeft,
    footerRight: payload.footerRight,
    maxRows: payload.maxRows,
  };
}

function extractCards(payload: ScenePayload): CardDef[] {
  return extractGridProps(payload).cards || [];
}

// ── Copy Button ────────────────────────────────────────────────────────────

function CopyButton({ text, label = 'Copy', className = '' }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }, [text]);

  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1 px-2 py-1 rounded transition-all duration-200 font-mono ${className} ${
        copied
          ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
          : 'text-white/40 hover:text-white/80 hover:bg-white/10 border-white/10'
      } border`}
      style={{ fontSize: '10px' }}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied!' : label}
    </button>
  );
}

// ── Card Row ───────────────────────────────────────────────────────────────

function CardRow({ card, index }: { card: CardDef; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isChanged = card._changed === true;

  return (
    <div className="rounded overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-2 py-1 px-2 text-left rounded transition-colors group ${
          isChanged ? 'hover:bg-cyan-400/5' : 'hover:bg-white/5'
        }`}
      >
        {/* Change indicator */}
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0 transition-all"
          style={{ backgroundColor: isChanged ? '#00d4f5' : 'rgba(255,255,255,0.15)' }}
        />

        {/* Card type */}
        <span
          className="font-mono flex-1 text-left"
          style={{ fontSize: '11px', color: isChanged ? '#00d4f5' : 'rgba(255,255,255,0.55)' }}
        >
          {card.span === 'full' && (
            <span className="mr-1 text-white/25">[full]</span>
          )}
          {card.type}
        </span>

        {/* Changed badge */}
        {isChanged && (
          <span
            className="font-mono px-1.5 py-0.5 rounded-full shrink-0"
            style={{
              fontSize: '9px',
              color: '#00d4f5',
              background: 'rgba(0,212,245,0.12)',
              border: '1px solid rgba(0,212,245,0.25)',
            }}
          >
            changed
          </span>
        )}

        {/* Expand chevron */}
        <span className="text-white/20 group-hover:text-white/50 transition-colors shrink-0">
          {expanded
            ? <ChevronDown className="w-3 h-3" />
            : <ChevronRight className="w-3 h-3" />}
        </span>
      </button>

      {/* Props panel */}
      {expanded && (
        <div
          className="mx-2 mb-1.5 rounded-lg overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Props header */}
          <div
            className="flex items-center justify-between px-3 py-1.5"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="font-mono text-white/30" style={{ fontSize: '10px' }}>
              {card.type} props
            </span>
            <CopyButton text={JSON.stringify(card.props, null, 2)} label="Copy props" />
          </div>
          {/* Props content */}
          <pre
            className="font-mono p-3 overflow-x-auto text-white/65 leading-relaxed"
            style={{ fontSize: '10px', maxHeight: '200px', overflowY: 'auto' }}
          >
            {JSON.stringify(card.props, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// ── Full JSON Modal ────────────────────────────────────────────────────────

function FullJsonModal({ payload, onClose }: { payload: ScenePayload; onClose: () => void }) {
  const json = JSON.stringify(payload, null, 2);
  const mode = detectMode(payload);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl sm:rounded-2xl overflow-hidden flex flex-col"
        style={{
          maxHeight: '85vh',
          background: 'rgba(8,10,16,0.98)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Code2 className="w-4 h-4 text-white/40" />
          <span className="font-mono text-white/50 flex-1" style={{ fontSize: '11px' }}>
            generate_scene — raw payload
          </span>
          <span
            className="font-mono px-2 py-0.5 rounded-full text-xs"
            style={{
              color: mode === 'no-change' ? 'rgba(255,255,255,0.35)' : mode === 'partial-change' ? '#00d4f5' : '#a78bfa',
              background: mode === 'no-change' ? 'rgba(255,255,255,0.07)' : mode === 'partial-change' ? 'rgba(0,212,245,0.10)' : 'rgba(167,139,250,0.10)',
            }}
          >
            {mode}
          </span>
          <CopyButton text={json} label="Copy all" className="shrink-0" />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/30 hover:text-white/80 hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* JSON content */}
        <div className="flex-1 overflow-auto p-4">
          <pre
            className="font-mono text-white/70 leading-relaxed whitespace-pre"
            style={{ fontSize: '11px' }}
          >
            {json}
          </pre>
        </div>

        {/* Footer bar */}
        <div
          className="px-4 py-2 flex items-center gap-3 shrink-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="font-mono text-white/25" style={{ fontSize: '10px' }}>
            {json.length.toLocaleString()} chars · {JSON.stringify(payload).length} bytes
          </span>
          <button
            onClick={onClose}
            className="ml-auto font-mono text-white/40 hover:text-white/70 transition-colors"
            style={{ fontSize: '11px' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

interface JsonPayloadBubbleProps {
  toolName: string;
  rawText: string;
  timestamp: Date;
}

export function JsonPayloadBubble({ toolName, rawText, timestamp }: JsonPayloadBubbleProps) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let payload: ScenePayload | null = null;
  try {
    payload = JSON.parse(rawText);
  } catch {
    return null;
  }
  if (!payload) return null;

  const mode = detectMode(payload);
  const gridProps = mode !== 'no-change' ? extractGridProps(payload) : null;
  const cards = mode !== 'no-change' ? extractCards(payload) : [];
  const changedCount = cards.filter((c) => c._changed).length;
  const unchangedCount = cards.length - changedCount;

  const modeColor =
    mode === 'no-change'
      ? 'rgba(255,255,255,0.25)'
      : mode === 'partial-change'
      ? '#00d4f5'
      : '#a78bfa';

  const ModeIcon =
    mode === 'no-change' ? Minus :
    mode === 'partial-change' ? GitBranch :
    Layers;

  const timeLabel = timestamp
    ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : '';

  const canExpand = mode !== 'no-change';

  return (
    <>
      {showModal && payload && (
        <FullJsonModal payload={payload} onClose={() => setShowModal(false)} />
      )}

      <div
        className="w-full rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${mode === 'no-change' ? 'rgba(255,255,255,0.07)' : `${modeColor}22`}`,
        }}
      >
        {/* ── Collapsed Header ─────────────────────────────────────── */}
        <button
          onClick={() => canExpand && setExpanded(!expanded)}
          className={`w-full flex items-center gap-2 px-3 py-2.5 text-left transition-colors ${
            canExpand ? 'hover:bg-white/5 cursor-pointer' : 'cursor-default'
          }`}
        >
          {/* Mode icon */}
          <ModeIcon className="w-3.5 h-3.5 shrink-0" style={{ color: modeColor }} />

          {/* Tool label */}
          <span
            className="font-mono font-semibold shrink-0"
            style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}
          >
            generate_scene
          </span>

          {/* Mode badge */}
          <span
            className="font-mono px-1.5 py-0.5 rounded-full shrink-0"
            style={{
              fontSize: '10px',
              color: modeColor,
              background: `${modeColor}16`,
              border: `1px solid ${modeColor}30`,
            }}
          >
            {mode === 'no-change'
              ? 'no-change'
              : mode === 'partial-change'
              ? `partial · ${changedCount}↑ ${unchangedCount}–`
              : `full · ${cards.length} cards`}
          </span>

          {/* Layout tag */}
          {gridProps?.layout && (
            <span
              className="font-mono shrink-0"
              style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)' }}
            >
              {gridProps.layout}
            </span>
          )}

          {/* Time */}
          <span
            className="ml-auto font-mono shrink-0"
            style={{ fontSize: '10px', color: 'rgba(255,255,255,0.20)' }}
          >
            {timeLabel}
          </span>

          {/* Expand chevron */}
          {canExpand && (
            <span className="text-white/20 shrink-0">
              {expanded
                ? <ChevronDown className="w-3.5 h-3.5" />
                : <ChevronRight className="w-3.5 h-3.5" />}
            </span>
          )}
        </button>

        {/* ── Expanded Body ─────────────────────────────────────────── */}
        {expanded && canExpand && gridProps && (
          <div
            className="px-3 pb-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Badge row */}
            {gridProps.badge && (
              <div className="flex items-start gap-2 pt-2.5 mb-1">
                <span
                  className="font-mono text-white/25 shrink-0 mt-0.5"
                  style={{ fontSize: '10px', minWidth: '36px' }}
                >
                  badge
                </span>
                <span
                  className="font-mono text-white/55 break-all"
                  style={{ fontSize: '11px' }}
                >
                  "{gridProps.badge}"
                </span>
              </div>
            )}

            {/* Layout row */}
            {gridProps.layout && (
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="font-mono text-white/25 shrink-0"
                  style={{ fontSize: '10px', minWidth: '36px' }}
                >
                  layout
                </span>
                <span
                  className="font-mono text-white/55"
                  style={{ fontSize: '11px' }}
                >
                  {gridProps.layout}
                </span>
              </div>
            )}

            {/* Cards section */}
            {cards.length > 0 && (
              <div className="mt-2.5">
                {/* Cards header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="font-mono text-white/30"
                    style={{ fontSize: '10px' }}
                  >
                    cards ({cards.length})
                  </span>
                  {changedCount > 0 && (
                    <span
                      className="font-mono"
                      style={{ fontSize: '10px', color: '#00d4f5' }}
                    >
                      {changedCount} changed
                    </span>
                  )}
                  {changedCount > 0 && unchangedCount > 0 && (
                    <span
                      className="font-mono text-white/25"
                      style={{ fontSize: '10px' }}
                    >
                      · {unchangedCount} unchanged
                    </span>
                  )}
                </div>

                {/* Card list */}
                <div
                  className="rounded-xl overflow-hidden py-1"
                  style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {cards.map((card, i) => (
                    <CardRow key={i} card={card} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Footer row */}
            {(gridProps.footerLeft || gridProps.footerRight) && (
              <div className="flex items-center gap-2 mt-2">
                <span
                  className="font-mono text-white/25 shrink-0"
                  style={{ fontSize: '10px', minWidth: '36px' }}
                >
                  footer
                </span>
                <span
                  className="font-mono text-white/40 truncate"
                  style={{ fontSize: '10px' }}
                >
                  {[gridProps.footerLeft, gridProps.footerRight].filter(Boolean).join(' · ')}
                </span>
              </div>
            )}

            {/* Action bar */}
            <div
              className="flex items-center gap-2 mt-3 pt-2.5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg font-mono transition-all duration-200 text-white/35 hover:text-white/75 hover:bg-white/10"
                style={{ fontSize: '10px', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <Code2 className="w-3 h-3" />
                Raw JSON
              </button>
              <CopyButton text={rawText} label="Copy all" />
              <CopyButton
                text={JSON.stringify(cards.filter((c) => c._changed), null, 2)}
                label="Copy changed"
                className={changedCount === 0 ? 'opacity-30 pointer-events-none' : ''}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ── Guard: is this text a scene payload? ──────────────────────────────────

export function isScenePayload(text: string): boolean {
  try {
    const obj = JSON.parse(text);
    return !!(
      obj.generativeSubsections ||
      obj.templateId === 'GridView' ||
      obj.templateId === 'no-change' ||
      (obj.cards && Array.isArray(obj.cards)) ||
      obj.id === 'no-change'
    );
  } catch {
    return false;
  }
}
